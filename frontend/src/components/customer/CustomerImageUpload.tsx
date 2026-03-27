import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Upload, X, Plus, Minus, ImageIcon } from 'lucide-react';

interface ImageRecord {
  id: string;
  image_url: string;
  storage_path: string;
  quantity: number;
  sort_order: number;
}

interface CustomerImageUploadProps {
  customerName: string;
  checkInId: string;
  authToken: string;
  onDone: () => void;
}

const MAX_IMAGES = 15;

export function CustomerImageUpload({ customerName, checkInId, authToken, onDone }: CustomerImageUploadProps) {
  const [images, setImages] = useState<ImageRecord[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const debounceTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // On mount: restore existing images for this check-in
  useEffect(() => {
    fetch(`/api/images/check-in/${checkInId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    })
      .then(r => r.json())
      .then(res => {
        if (res.success && Array.isArray(res.data)) {
          setImages(res.data);
          const qMap: Record<string, number> = {};
          res.data.forEach((img: ImageRecord) => { qMap[img.id] = img.quantity; });
          setQuantities(qMap);
        }
      })
      .catch(() => {}); // silent — user can still upload new images
  }, [checkInId, authToken]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const remaining = MAX_IMAGES - images.length;
    const toUpload = files.slice(0, remaining);

    if (toUpload.length === 0) {
      setError(`You've reached the maximum of ${MAX_IMAGES} images.`);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setError(files.length > toUpload.length
      ? `Only ${toUpload.length} image(s) added — ${MAX_IMAGES} image maximum.`
      : ''
    );

    setUploading(true);
    const formData = new FormData();
    toUpload.forEach(file => formData.append('images', file));
    formData.append('quantities', JSON.stringify(toUpload.map(() => 1)));

    try {
      const res = await fetch('/api/images/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${authToken}` },
        body: formData,
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || 'Upload failed. Please try again.');
      } else {
        const newImages: ImageRecord[] = result.data;
        setImages(prev => [...prev, ...newImages]);
        setQuantities(prev => {
          const updated = { ...prev };
          newImages.forEach((img: ImageRecord) => { updated[img.id] = img.quantity; });
          return updated;
        });
      }
    } catch {
      setError('Upload failed. Please check your connection.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleQuantityChange = useCallback((imageId: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[imageId] ?? 1;
      const next = Math.max(1, Math.min(99, current + delta));
      if (next === current) return prev;

      // Debounce the PATCH call
      if (debounceTimers.current[imageId]) clearTimeout(debounceTimers.current[imageId]);
      debounceTimers.current[imageId] = setTimeout(async () => {
        try {
          await fetch(`/api/images/${imageId}/quantity`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ quantity: next }),
          });
        } catch {
          // non-critical — quantity stays correct in local state
        }
      }, 600);

      return { ...prev, [imageId]: next };
    });
  }, [authToken]);

  const handleDelete = async (imageId: string) => {
    // Optimistic removal
    setImages(prev => prev.filter(img => img.id !== imageId));
    setQuantities(prev => {
      const updated = { ...prev };
      delete updated[imageId];
      return updated;
    });

    try {
      await fetch(`/api/images/${imageId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${authToken}` },
      });
    } catch {
      // silent — image is already removed from UI
    }
  };

  const atLimit = images.length >= MAX_IMAGES;

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 style={{ color: 'var(--color-gold)' }}>Welcome, {customerName}!</h1>
          <p className="mt-2" style={{ color: 'var(--color-text-gray)' }}>
            Upload photos of materials you're interested in (optional)
          </p>
        </div>

        {/* Upload button */}
        <div className="mb-4 text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
            disabled={uploading || atLimit}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || atLimit}
            className="px-6 py-3 rounded-lg font-semibold"
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              backgroundColor: atLimit ? 'var(--color-border)' : 'var(--color-gold)',
              color: atLimit ? 'var(--color-text-gray)' : 'var(--color-background)',
              cursor: atLimit ? 'not-allowed' : 'pointer',
            }}
          >
            <Upload size={20} />
            {uploading ? 'Uploading…' : 'Add Photos'}
          </button>
        </div>

        {/* Image counter */}
        <p className="mb-4 text-center" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
          {images.length} / {MAX_IMAGES} images
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid var(--color-error)' }}>
            <p className="text-center" style={{ color: 'var(--color-error)' }}>{error}</p>
          </div>
        )}

        {/* Image list */}
        {images.length > 0 && (
          <div className="space-y-3 mb-8">
            {images.map(img => (
              <div
                key={img.id}
                className="flex items-center gap-4 p-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
              >
                {/* Thumbnail */}
                <img
                  src={img.image_url}
                  alt="Uploaded material"
                  className="rounded object-cover flex-shrink-0"
                  style={{ width: 120, height: 120 }}
                />

                <div className="flex-1" />

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(img.id, -1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center" style={{ color: 'var(--color-text-white)', fontWeight: 600 }}>
                    {quantities[img.id] ?? img.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(img.id, +1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(img.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center ml-2"
                  style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid var(--color-error)', color: 'var(--color-error)' }}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {images.length === 0 && !uploading && (
          <div className="mb-8 py-12 text-center rounded-lg" style={{ border: '2px dashed var(--color-border)' }}>
            <ImageIcon size={48} className="mx-auto mb-3" style={{ color: 'var(--color-text-gray)' }} />
            <p style={{ color: 'var(--color-text-gray)' }}>No photos uploaded yet</p>
          </div>
        )}

        {/* Done */}
        <button
          onClick={onDone}
          disabled={uploading}
          className="w-full py-4 rounded-lg font-semibold"
          style={{
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-background)',
            opacity: uploading ? 0.7 : 1,
          }}
        >
          Done
        </button>

      </div>
    </div>
  );
}
