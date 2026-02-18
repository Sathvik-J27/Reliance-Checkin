import React, { useState, useEffect } from 'react';
import { LogOut } from 'lucide-react';
import { Staff2QueueItem } from './Staff2QueueItem';
import { Staff2ViewPopup } from './Staff2ViewPopup';
import logo from 'figma:asset/5ebff9a217654d307f5ff0e6abe952a2f7edba47.png';

interface Staff2DashboardProps {
  username: string;
  onLogout: () => void;
  checkIns: any[];
  onMarkAsDone: (customerId: string) => void;
}

export function Staff2Dashboard({ username, onLogout, checkIns, onMarkAsDone }: Staff2DashboardProps) {
  const [activeTab, setActiveTab] = useState<'queue' | 'history'>('queue');
  const [queueCustomers, setQueueCustomers] = useState<any[]>([]);
  const [historyCustomers, setHistoryCustomers] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);
  const [showViewPopup, setShowViewPopup] = useState(false);
  
  // Pagination state
  const [queuePage, setQueuePage] = useState(1);
  const [historyPage, setHistoryPage] = useState(1);
  const itemsPerPage = 15;

  // History filters
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Load queue from checkIns prop
  useEffect(() => {
    loadQueue();
  }, [checkIns]);

  // Load history when filters change
  useEffect(() => {
    if (activeTab === 'history') {
      loadHistory();
    }
  }, [activeTab, selectedMonth, selectedDay, selectedYear, checkIns]);

  const loadQueue = async () => {
    // Filter checkIns with status 'waiting' and sort by check-in time (oldest first - FIFO)
    const queue = checkIns
      .filter(c => c.status === 'waiting')
      .sort((a, b) => new Date(a.checkInTime).getTime() - new Date(b.checkInTime).getTime());
    setQueueCustomers(queue);
  };

  const loadHistory = async () => {
    // Filter checkIns with status 'done' for the selected date
    const filtered = checkIns.filter(c => {
      if (c.status !== 'done' && c.status !== 'helped') return false;
      
      const checkInDate = new Date(c.checkInTime);
      return (
        checkInDate.getMonth() + 1 === selectedMonth &&
        checkInDate.getDate() === selectedDay &&
        checkInDate.getFullYear() === selectedYear
      );
    });
    setHistoryCustomers(filtered);
  };

  const handleView = (customer: any) => {
    setSelectedCustomer(customer);
    setShowViewPopup(true);
  };

  const handleDone = async (customerId: string) => {
    // Update locally (in real implementation, this would call API)
    const updatedQueue = queueCustomers.filter(c => c.id !== customerId);
    setQueueCustomers(updatedQueue);
    
    // Note: In production, you'd call the API here:
    // await fetch(`/api/staff2/customers/${customerId}/done`, { method: 'PUT' });
    onMarkAsDone(customerId);
  };

  const handleSaveCustomer = async (customerId: string, updatedData: any) => {
    // Update locally in both queue and history
    const updatedQueue = queueCustomers.map(c => 
      c.id === customerId ? { ...c, ...updatedData } : c
    );
    const updatedHistory = historyCustomers.map(c => 
      c.id === customerId ? { ...c, ...updatedData } : c
    );
    setQueueCustomers(updatedQueue);
    setHistoryCustomers(updatedHistory);
    setShowViewPopup(false);
    
    // Note: In production, you'd call the API here:
    // await fetch(`/api/staff2/customers/${customerId}`, { method: 'PUT', body: JSON.stringify(updatedData) });
  };

  // Calculate daily stats
  const totalVisitors = historyCustomers.length;
  const newCustomers = historyCustomers.filter(c => !c.isRevisit).length;
  const revisits = historyCustomers.filter(c => c.isRevisit).length;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = [2024, 2025, 2026, 2027];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <header className="border-b" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Reliance Surfaces" className="w-10 h-10 object-contain" />
            <span className="text-xl font-medium" style={{ color: 'var(--color-text-white)' }}>
              Reliance Surfaces
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span style={{ color: 'var(--color-text-gray)' }}>
              Welcome, {username}
            </span>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
        <div className="flex px-6">
          <button
            onClick={() => setActiveTab('queue')}
            className="px-6 py-4 font-medium border-b-2"
            style={{
              color: activeTab === 'queue' ? 'var(--color-gold)' : 'var(--color-text-gray)',
              borderColor: activeTab === 'queue' ? 'var(--color-gold)' : 'transparent',
            }}
          >
            Queue ({queueCustomers.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className="px-6 py-4 font-medium border-b-2"
            style={{
              color: activeTab === 'history' ? 'var(--color-gold)' : 'var(--color-text-gray)',
              borderColor: activeTab === 'history' ? 'var(--color-gold)' : 'transparent',
            }}
          >
            History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'queue' ? (
          // Queue Tab
          <div>
            <h2 className="text-2xl mb-6" style={{ color: 'var(--color-text-white)' }}>
              Customer Queue
            </h2>

            {queueCustomers.length === 0 ? (
              <div 
                className="text-center py-12 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
              >
                <p style={{ color: 'var(--color-text-gray)' }}>
                  No customers in queue
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {queueCustomers.slice((queuePage - 1) * itemsPerPage, queuePage * itemsPerPage).map(customer => (
                  <Staff2QueueItem
                    key={customer.id}
                    customer={customer}
                    onView={handleView}
                    onDone={handleDone}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {queueCustomers.length > itemsPerPage && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setQueuePage(queuePage - 1)}
                  disabled={queuePage === 1}
                  className="px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                >
                  Previous
                </button>
                <span className="mx-4" style={{ color: 'var(--color-text-gray)' }}>
                  Page {queuePage} of {Math.ceil(queueCustomers.length / itemsPerPage)}
                </span>
                <button
                  onClick={() => setQueuePage(queuePage + 1)}
                  disabled={queuePage * itemsPerPage >= queueCustomers.length}
                  className="px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          // History Tab
          <div>
            <div className="mb-6">
              <h2 className="text-2xl mb-4" style={{ color: 'var(--color-text-white)' }}>
                Daily Visitors
              </h2>

              {/* Date Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                    Month
                  </label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                    className="px-4 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                  >
                    {months.map((month, index) => (
                      <option key={index} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                    Day
                  </label>
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                    className="px-4 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                  >
                    {days.map(day => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm" style={{ color: 'var(--color-text-gray)' }}>
                    Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    className="px-4 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                  >
                    {years.map(year => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>
                    Total Visitors
                  </p>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-gold)' }}>
                    {totalVisitors}
                  </p>
                </div>

                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>
                    New Customers
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#3B82F6' }}>
                    {newCustomers}
                  </p>
                </div>

                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>
                    Revisits
                  </p>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-gold)' }}>
                    {revisits}
                  </p>
                </div>
              </div>
            </div>

            {/* History List */}
            {historyCustomers.length === 0 ? (
              <div 
                className="text-center py-12 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
              >
                <p style={{ color: 'var(--color-text-gray)' }}>
                  No visitors for selected date
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {historyCustomers.slice((historyPage - 1) * itemsPerPage, historyPage * itemsPerPage).map(customer => (
                  <div
                    key={customer.id}
                    className="p-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                    onClick={() => handleView(customer)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Initial Circle */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                          style={{ backgroundColor: 'rgba(212, 167, 54, 0.2)', color: 'var(--color-gold)' }}
                        >
                          {customer.firstName?.charAt(0).toUpperCase() || '?'}
                        </div>

                        {/* Customer Info */}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium" style={{ color: 'var(--color-text-white)' }}>
                              {customer.firstName} {customer.lastName}
                            </p>
                            <span
                              className="px-2 py-0.5 rounded text-xs"
                              style={{
                                backgroundColor: customer.isRevisit ? 'rgba(212, 167, 54, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                                color: customer.isRevisit ? 'var(--color-gold)' : '#3B82F6',
                              }}
                            >
                              {customer.isRevisit ? 'Revisiting' : 'First Time'}
                            </span>
                          </div>
                          <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                            {customer.phones?.[0] || 'No phone'}
                          </p>
                        </div>
                      </div>

                      {/* Visitor Count */}
                      <div className="text-right">
                        <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                          👥 {(customer.partySize?.adults || 0) + (customer.partySize?.minors || 0)} visitors
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {historyCustomers.length > itemsPerPage && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setHistoryPage(historyPage - 1)}
                  disabled={historyPage === 1}
                  className="px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                >
                  Previous
                </button>
                <span className="mx-4" style={{ color: 'var(--color-text-gray)' }}>
                  Page {historyPage} of {Math.ceil(historyCustomers.length / itemsPerPage)}
                </span>
                <button
                  onClick={() => setHistoryPage(historyPage + 1)}
                  disabled={historyPage * itemsPerPage >= historyCustomers.length}
                  className="px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* View Popup */}
      {showViewPopup && selectedCustomer && (
        <Staff2ViewPopup
          customer={selectedCustomer}
          onClose={() => {
            setShowViewPopup(false);
            setSelectedCustomer(null);
          }}
          onSave={handleSaveCustomer}
        />
      )}
    </div>
  );
}