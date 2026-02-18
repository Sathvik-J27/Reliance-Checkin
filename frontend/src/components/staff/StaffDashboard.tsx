import React, { useState } from 'react';
import { Bell, LogOut } from 'lucide-react';
import { CustomerPopup, CheckIn, DraftData } from './CustomerPopup';
import logo from 'figma:asset/5ebff9a217654d307f5ff0e6abe952a2f7edba47.png';

interface StaffDashboardProps {
  username: string;
  onLogout: () => void;
  checkIns: CheckIn[];
  onMarkAsHelped: (id: string) => void;
  onSaveDraft: (id: string, draft: DraftData) => void;
  onRevisit: (customer: CheckIn) => void;
  onUpdateCurrentlyHelpedBy: (id: string, staffName: string) => void;
}

export function StaffDashboard({
  username,
  onLogout,
  checkIns,
  onMarkAsHelped,
  onSaveDraft,
  onRevisit,
  onUpdateCurrentlyHelpedBy,
}: StaffDashboardProps) {
  const [activeTab, setActiveTab] = useState<'queue' | 'history'>('queue');
  const [selectedCustomer, setSelectedCustomer] = useState<CheckIn | null>(null);
  const [historyPage, setHistoryPage] = useState(1);
  const [filterFabricator, setFilterFabricator] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterSheetNumber, setFilterSheetNumber] = useState('');
  const [filterCustomerName, setFilterCustomerName] = useState('');
  const [filterPhone, setFilterPhone] = useState('');
  const [filterHold, setFilterHold] = useState<'all' | 'yes' | 'no'>('all');
  const itemsPerPage = 10;

  const waitingCustomers = checkIns.filter(c => c.status === 'waiting');
  const helpedCustomers = checkIns.filter(c => c.status === 'helped');

  // Apply filters to history
  const filteredHistory = helpedCustomers.filter(customer => {
    // Filter by fabricator
    if (filterFabricator && customer.draft?.selectedFabricator) {
      const fabricatorName = customer.draft.selectedFabricator.companyName.toLowerCase();
      if (!fabricatorName.includes(filterFabricator.toLowerCase())) {
        return false;
      }
    }

    // Filter by date
    if (filterDate && customer.helpedTime) {
      const customerDate = customer.helpedTime.toISOString().split('T')[0];
      if (customerDate !== filterDate) {
        return false;
      }
    }

    // Filter by selection sheet number
    if (filterSheetNumber && customer.draft?.selectionSheetNumber) {
      if (!customer.draft.selectionSheetNumber.toLowerCase().includes(filterSheetNumber.toLowerCase())) {
        return false;
      }
    }

    // Filter by customer name
    if (filterCustomerName) {
      const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
      if (!fullName.includes(filterCustomerName.toLowerCase())) {
        return false;
      }
    }

    // Filter by phone
    if (filterPhone) {
      const hasMatchingPhone = customer.phones.some(phone => 
        phone.toLowerCase().includes(filterPhone.toLowerCase())
      );
      if (!hasMatchingPhone) {
        return false;
      }
    }

    // Filter by hold status
    if (filterHold !== 'all') {
      const isHold = customer.draft?.isHold || false;
      if (filterHold === 'yes' && !isHold) {
        return false;
      }
      if (filterHold === 'no' && isHold) {
        return false;
      }
    }

    return true;
  });

  // Sort history by Month → Day → Year (most recent first)
  const sortedHistory = [...filteredHistory].sort((a, b) => {
    if (!a.helpedTime || !b.helpedTime) return 0;
    return b.helpedTime.getTime() - a.helpedTime.getTime();
  });

  const paginatedHistory = sortedHistory.slice(
    (historyPage - 1) * itemsPerPage,
    historyPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedHistory.length / itemsPerPage);

  const getWaitTime = (checkInTime: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - checkInTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min`;
    
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return `${hours}h ${mins}m`;
  };

  const getTotalWaitTime = (checkInTime: Date, helpedTime: Date) => {
    const diffMs = helpedTime.getTime() - checkInTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Less than 1 min';
    if (diffMins < 60) return `${diffMins} min`;
    
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  const formatDateTime = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const getCustomerStatus = (customer: CheckIn) => {
    if (customer.draft && customer.draft.step > 0) {
      return 'In Progress';
    }
    return 'New';
  };

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const handleDoneClick = (customerId: string) => {
    // Save empty draft data when using Done button (no materials, but still mark as helped)
    const emptyDraft: DraftData = {
      step: 0,
      materials: [],
      isHold: false,
    };
    onSaveDraft(customerId, emptyDraft);
    onMarkAsHelped(customerId);
  };

  const handlePopupSubmit = (customerId: string, data: DraftData) => {
    // Always save draft data first
    onSaveDraft(customerId, data);
    
    // Then mark as helped if it's a final submission
    if (data.step === 3) {
      onMarkAsHelped(customerId);
    }
  };

  const handleViewCustomer = (checkIn: CheckIn) => {
    // Update who's currently helping when viewing
    onUpdateCurrentlyHelpedBy(checkIn.id, username);
    setSelectedCustomer(checkIn);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <div className="border-b" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Reliance Surfaces" className="w-12 h-12 object-contain" />
              <h2 style={{ color: 'var(--color-gold)' }}>Reliance Surfaces</h2>
            </div>

            <div className="flex items-center gap-4">
              <span style={{ color: 'var(--color-text-white)' }}>{username}</span>
              <button className="relative p-2 rounded-lg hover:bg-opacity-50" style={{ backgroundColor: 'var(--color-background)' }}>
                <Bell size={20} style={{ color: 'var(--color-text-gray)' }} />
                {waitingCustomers.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}>
                    {waitingCustomers.length}
                  </span>
                )}
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-6">
            <button
              onClick={() => setActiveTab('queue')}
              className="pb-3 px-2"
              style={{
                color: activeTab === 'queue' ? 'var(--color-gold)' : 'var(--color-text-gray)',
                borderBottom: activeTab === 'queue' ? '2px solid var(--color-gold)' : '2px solid transparent',
              }}
            >
              Queue {waitingCustomers.length > 0 && `(${waitingCustomers.length})`}
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className="pb-3 px-2"
              style={{
                color: activeTab === 'history' ? 'var(--color-gold)' : 'var(--color-text-gray)',
                borderBottom: activeTab === 'history' ? '2px solid var(--color-gold)' : '2px solid transparent',
              }}
            >
              History
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'queue' && (
          <div>
            {/* Queue */}
            <div className="space-y-3">
              {waitingCustomers.length === 0 ? (
                <div className="text-center py-12" style={{ color: 'var(--color-text-gray)' }}>
                  No customers in queue
                </div>
              ) : (
                waitingCustomers.map((checkIn) => (
                  <div
                    key={checkIn.id}
                    className="flex items-center gap-4 p-3 rounded-lg transition-all hover:bg-opacity-80"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                  >
                    {/* Avatar with First Letter */}
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{ 
                        backgroundColor: 'var(--color-gold)',
                        color: 'var(--color-background)'
                      }}
                    >
                      {checkIn.firstName.charAt(0).toUpperCase()}
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium truncate" style={{ color: 'var(--color-text-white)' }}>
                          {checkIn.firstName} {checkIn.lastName}
                        </span>
                        {checkIn.currentlyHelpedBy ? (
                          <span 
                            className="px-2 py-0.5 rounded text-xs font-medium flex-shrink-0"
                            style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24' }}
                          >
                            In Progress • {checkIn.currentlyHelpedBy}
                          </span>
                        ) : (
                          <span 
                            className="px-2 py-0.5 rounded text-xs font-medium flex-shrink-0"
                            style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}
                          >
                            New
                          </span>
                        )}
                        {/* Party Size Indicator */}
                        {checkIn.partySize && (checkIn.partySize.adults > 1 || checkIn.partySize.minors > 0) && (
                          <span 
                            className="px-2 py-0.5 rounded text-xs flex-shrink-0"
                            style={{ backgroundColor: 'rgba(212, 167, 54, 0.2)', color: 'var(--color-gold)' }}
                          >
                            {checkIn.partySize.adults} {checkIn.partySize.adults === 1 ? 'Adult' : 'Adults'}
                            {checkIn.partySize.minors > 0 && `, ${checkIn.partySize.minors} ${checkIn.partySize.minors === 1 ? 'Minor' : 'Minors'}`}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--color-text-gray)' }}>
                        <span>Checked in at {formatTime(checkIn.checkInTime)}</span>
                        <span>•</span>
                        <span style={{ color: 'var(--color-gold)' }}>Waiting {getWaitTime(checkIn.checkInTime)}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleViewCustomer(checkIn)}
                      className="flex-shrink-0 px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90"
                      style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
                    >
                      View
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            {/* Filters */}
            <div className="mb-6 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: 'var(--color-gold)', marginBottom: '16px' }}>Filter History</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Customer Name</label>
                  <input
                    type="text"
                    value={filterCustomerName}
                    onChange={(e) => {
                      setFilterCustomerName(e.target.value);
                      setHistoryPage(1);
                    }}
                    placeholder="Search by name..."
                    className="w-full px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Phone Number</label>
                  <input
                    type="text"
                    value={filterPhone}
                    onChange={(e) => {
                      setFilterPhone(e.target.value);
                      setHistoryPage(1);
                    }}
                    placeholder="Search by phone..."
                    className="w-full px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Fabricator</label>
                  <input
                    type="text"
                    value={filterFabricator}
                    onChange={(e) => {
                      setFilterFabricator(e.target.value);
                      setHistoryPage(1);
                    }}
                    placeholder="Search by fabricator..."
                    className="w-full px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Selection Sheet #</label>
                  <input
                    type="text"
                    value={filterSheetNumber}
                    onChange={(e) => {
                      setFilterSheetNumber(e.target.value);
                      setHistoryPage(1);
                    }}
                    placeholder="Search by sheet #..."
                    className="w-full px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Date</label>
                  <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => {
                      setFilterDate(e.target.value);
                      setHistoryPage(1);
                    }}
                    className="w-full px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Hold Status</label>
                  <select
                    value={filterHold}
                    onChange={(e) => {
                      setFilterHold(e.target.value as 'all' | 'yes' | 'no');
                      setHistoryPage(1);
                    }}
                    className="w-full px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', fontSize: '14px' }}
                  >
                    <option value="all">All</option>
                    <option value="yes">Hold</option>
                    <option value="no">Not Hold</option>
                  </select>
                </div>
              </div>
              {(filterCustomerName || filterPhone || filterFabricator || filterSheetNumber || filterDate || filterHold !== 'all') && (
                <button
                  onClick={() => {
                    setFilterCustomerName('');
                    setFilterPhone('');
                    setFilterFabricator('');
                    setFilterSheetNumber('');
                    setFilterDate('');
                    setFilterHold('all');
                    setHistoryPage(1);
                  }}
                  className="mt-4 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                >
                  Clear Filters
                </button>
              )}
            </div>

            {sortedHistory.length === 0 ? (
              <div className="text-center py-16" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
                <p style={{ color: 'var(--color-text-gray)', fontSize: '18px' }}>
                  {filteredHistory.length === 0 && helpedCustomers.length > 0 ? 'No matching results' : 'No history yet'}
                </p>
                <p style={{ color: 'var(--color-text-gray)', marginTop: '8px' }}>
                  {filteredHistory.length === 0 && helpedCustomers.length > 0 ? 'Try adjusting your filters' : 'Helped customers will appear here'}
                </p>
              </div>
            ) : (
              <>
                {/* History Table */}
                <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
                  <div className="overflow-x-auto">
                    <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'var(--color-background)', borderBottom: '1px solid var(--color-border)' }}>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}>Sheet #</th>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}>Customer Name</th>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}>Phone Number</th>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}>Fabricator</th>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}>Check-in</th>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}>Helped At</th>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}>Hold</th>
                          <th className="px-4 py-3 text-left" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: '600' }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedHistory.map((customer, index) => (
                          <tr 
                            key={customer.id}
                            style={{ 
                              borderBottom: index < paginatedHistory.length - 1 ? '1px solid var(--color-border)' : 'none',
                              backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(0, 0, 0, 0.2)'
                            }}
                          >
                            <td className="px-4 py-4" style={{ color: 'var(--color-text-white)', fontSize: '14px' }}>
                              {customer.draft?.selectionSheetNumber || '-'}
                            </td>
                            <td className="px-4 py-4" style={{ color: 'var(--color-text-white)', fontSize: '14px' }}>
                              {customer.firstName} {customer.lastName}
                            </td>
                            <td className="px-4 py-4" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
                              {customer.phones[0] || '-'}
                            </td>
                            <td className="px-4 py-4" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
                              {customer.draft?.selectedFabricator?.companyName || '-'}
                            </td>
                            <td className="px-4 py-4" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
                              {formatDateTime(customer.checkInTime)}
                            </td>
                            <td className="px-4 py-4" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
                              {customer.helpedTime ? formatDateTime(customer.helpedTime) : '-'}
                            </td>
                            <td className="px-4 py-4" style={{ color: customer.draft?.isHold ? 'var(--color-gold)' : 'var(--color-text-gray)', fontSize: '14px', fontWeight: customer.draft?.isHold ? '600' : 'normal' }}>
                              {customer.draft?.isHold ? 'Yes' : 'No'}
                            </td>
                            <td className="px-4 py-4">
                              <button
                                onClick={() => setSelectedCustomer(customer)}
                                className="px-4 py-2 rounded-lg"
                                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', fontSize: '14px' }}
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                      onClick={() => setHistoryPage(Math.max(1, historyPage - 1))}
                      disabled={historyPage === 1}
                      className="px-4 py-2 rounded-lg"
                      style={{
                        backgroundColor: historyPage === 1 ? 'var(--color-background)' : 'var(--color-card)',
                        border: '1px solid var(--color-border)',
                        color: historyPage === 1 ? 'var(--color-text-gray)' : 'var(--color-text-white)',
                        cursor: historyPage === 1 ? 'not-allowed' : 'pointer',
                      }}
                    >
                      Previous
                    </button>
                    <span style={{ color: 'var(--color-text-white)' }}>
                      Page {historyPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setHistoryPage(Math.min(totalPages, historyPage + 1))}
                      disabled={historyPage === totalPages}
                      className="px-4 py-2 rounded-lg"
                      style={{
                        backgroundColor: historyPage === totalPages ? 'var(--color-background)' : 'var(--color-card)',
                        border: '1px solid var(--color-border)',
                        color: historyPage === totalPages ? 'var(--color-text-gray)' : 'var(--color-text-white)',
                        cursor: historyPage === totalPages ? 'not-allowed' : 'pointer',
                      }}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Customer Popup */}
      {selectedCustomer && (
        <CustomerPopup
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
          onSubmit={handlePopupSubmit}
          onMarkAsHelped={onMarkAsHelped}
          onRevisit={onRevisit}
          staffUsername={username}
          isViewOnly={selectedCustomer.status === 'helped'}
          allCheckIns={checkIns}
        />
      )}
    </div>
  );
}