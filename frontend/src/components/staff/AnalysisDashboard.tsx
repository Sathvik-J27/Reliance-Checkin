import React, { useState, useMemo } from 'react';
import { LogOut, Search, Filter, Eye, X, RotateCcw, Check } from 'lucide-react';
import { CheckIn, Fabricator } from './CustomerPopup';
import { PricingPopup } from './PricingPopup';
import logo from 'figma:asset/5ebff9a217654d307f5ff0e6abe952a2f7edba47.png';

interface AnalysisDashboardProps {
  username: string;
  onLogout: () => void;
  checkIns: CheckIn[];
  fabricators: Fabricator[];
  onComplete: (id: string) => void;
  onResetHoldDate?: (id: string) => void;
  onPriceUpdate?: (id: string, updatedBy: string) => void;
}

export function AnalysisDashboard({ username, onLogout, checkIns, fabricators, onComplete, onResetHoldDate, onPriceUpdate }: AnalysisDashboardProps) {
  const [selectedCustomer, setSelectedCustomer] = useState<CheckIn | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFabricator, setFilterFabricator] = useState('');
  const [filterSalesPerson, setFilterSalesPerson] = useState('');
  const [filterHold, setFilterHold] = useState<'all' | 'hold' | 'no-hold'>('all');
  const [filterPriced, setFilterPriced] = useState<'all' | 'priced' | 'not-priced'>('all');
  const [filterConverted, setFilterConverted] = useState<'all' | 'yes' | 'no'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [convertedStatus, setConvertedStatus] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'main' | 'holds-not-converted' | 'ignored'>('main');
  const [ignoredStatus, setIgnoredStatus] = useState<Record<string, boolean>>({});
  const [markedAsKnown, setMarkedAsKnown] = useState<Record<string, boolean>>({});
  const [undoneItems, setUndoneItems] = useState<Record<string, boolean>>({});
  
  // Month/Year filter states
  const [selectedPricedYear, setSelectedPricedYear] = useState<number>(new Date().getFullYear());
  const [selectedPricedMonth, setSelectedPricedMonth] = useState<number>(new Date().getMonth());
  const [selectedOnHoldYear, setSelectedOnHoldYear] = useState<number>(new Date().getFullYear());
  const [selectedOnHoldMonth, setSelectedOnHoldMonth] = useState<number>(new Date().getMonth());
  const [selectedConvertedYear, setSelectedConvertedYear] = useState<number>(new Date().getFullYear());
  const [selectedConvertedMonth, setSelectedConvertedMonth] = useState<number>(new Date().getMonth());

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const availableYears = [2025, 2026, 2027, 2028];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Filter check-ins that have been helped (have materials assigned)
  const pricingCheckIns = useMemo(() => {
    return checkIns.filter(c => 
      c.status === 'helped' && 
      c.draft?.materials && 
      c.draft.materials.length > 0
    );
  }, [checkIns]);

  // Get unique sales people for filter
  const salesPeople = useMemo(() => {
    const uniqueSalesPeople = new Set<string>();
    pricingCheckIns.forEach(checkIn => {
      if (checkIn.draft?.salesPerson) {
        uniqueSalesPeople.add(checkIn.draft.salesPerson);
      }
    });
    return Array.from(uniqueSalesPeople).sort();
  }, [pricingCheckIns]);

  // Helper functions for date filtering
  const isToday = (date: Date) => {
    const today = new Date();
    const checkDate = new Date(date);
    return checkDate.toDateString() === today.toDateString();
  };

  const isOlderThan5Days = (date: Date) => {
    const today = new Date();
    const checkDate = new Date(date);
    const diffTime = today.getTime() - checkDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 5;
  };

  // Split check-ins into three categories
  const { mainDashboardCheckIns, holdsNotConvertedCheckIns, ignoredCheckIns } = useMemo(() => {
    const main: CheckIn[] = [];
    const holdsNotConverted: CheckIn[] = [];
    const ignored: CheckIn[] = [];

    pricingCheckIns.forEach(checkIn => {
      const isIgnored = ignoredStatus[checkIn.id] || false;
      const isHold = checkIn.draft?.isHold || false;
      const isNotConverted = !convertedStatus[checkIn.id];
      const isOld = isOlderThan5Days(checkIn.checkInTime);

      if (isIgnored) {
        ignored.push(checkIn);
      } else if (isHold && isNotConverted && isOld) {
        holdsNotConverted.push(checkIn);
      } else {
        main.push(checkIn);
      }
    });

    return { mainDashboardCheckIns: main, holdsNotConvertedCheckIns: holdsNotConverted, ignoredCheckIns: ignored };
  }, [pricingCheckIns, convertedStatus, ignoredStatus]);

  // Get current tab's check-ins
  const currentCheckIns = useMemo(() => {
    if (activeTab === 'holds-not-converted') return holdsNotConvertedCheckIns;
    if (activeTab === 'ignored') return ignoredCheckIns;
    return mainDashboardCheckIns;
  }, [activeTab, mainDashboardCheckIns, holdsNotConvertedCheckIns, ignoredCheckIns]);

  // Apply filters and sort
  const filteredCheckIns = useMemo(() => {
    const filtered = currentCheckIns.filter(checkIn => {
      const matchesSearch = 
        `${checkIn.firstName} ${checkIn.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        checkIn.phones?.some(p => p.includes(searchTerm)) ||
        checkIn.draft?.selectionSheetNumber?.includes(searchTerm);

      const matchesFabricator = !filterFabricator || 
        checkIn.draft?.selectedFabricator?.id === filterFabricator;

      const matchesSalesPerson = !filterSalesPerson || 
        checkIn.draft?.salesPerson === filterSalesPerson;

      const matchesHold = filterHold === 'all' ||
        (filterHold === 'hold' && checkIn.draft?.isHold) ||
        (filterHold === 'no-hold' && !checkIn.draft?.isHold);

      const matchesPriced = filterPriced === 'all' ||
        (filterPriced === 'priced' && checkIn.priced) ||
        (filterPriced === 'not-priced' && !checkIn.priced);

      const matchesConverted = filterConverted === 'all' ||
        (filterConverted === 'yes' && convertedStatus[checkIn.id]) ||
        (filterConverted === 'no' && !convertedStatus[checkIn.id]);

      return matchesSearch && matchesFabricator && matchesSalesPerson && matchesHold && matchesPriced && matchesConverted;
    });
    
    // Sort by check-in time in descending order (most recent first - LIFO)
    return [...filtered].sort((a, b) => {
      return new Date(b.checkInTime).getTime() - new Date(a.checkInTime).getTime();
    });
  }, [currentCheckIns, searchTerm, filterFabricator, filterSalesPerson, filterHold, filterPriced, filterConverted, convertedStatus]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredCheckIns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCheckIns = filteredCheckIns.slice(startIndex, endIndex);

  // Reset to page 1 when filters change or tab changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterFabricator, filterSalesPerson, filterHold, filterPriced, filterConverted, activeTab]);

  const handleViewPricing = (customer: CheckIn) => {
    setSelectedCustomer(customer);
  };

  const handleIgnore = (checkInId: string) => {
    setIgnoredStatus({ ...ignoredStatus, [checkInId]: true });
  };

  const handleUndoHold = (checkInId: string) => {
    if (onResetHoldDate) {
      onResetHoldDate(checkInId);
    }
    setUndoneItems({ ...undoneItems, [checkInId]: true });
  };

  const handleToggleKnown = (checkInId: string) => {
    setMarkedAsKnown({ ...markedAsKnown, [checkInId]: !markedAsKnown[checkInId] });
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const matchesSelectedMonthYear = (date: Date, month: number, year: number) => {
    const checkDate = new Date(date);
    return checkDate.getMonth() === month && checkDate.getFullYear() === year;
  };

  // Calculate stats with sales person breakdown
  const stats = useMemo(() => {
    const pendingPricing = mainDashboardCheckIns.filter(c => !c.priced).length;
    const pricedToday = mainDashboardCheckIns.filter(c => c.priced && c.pricedTime && isToday(c.pricedTime)).length;
    const onHold = mainDashboardCheckIns.filter(c => c.draft?.isHold).length;
    const onHoldForMonth = mainDashboardCheckIns.filter(c => c.draft?.isHold && matchesSelectedMonthYear(c.checkInTime, selectedOnHoldMonth, selectedOnHoldYear)).length;
    const pricedForMonth = mainDashboardCheckIns.filter(c => c.priced && c.pricedTime && matchesSelectedMonthYear(c.pricedTime, selectedPricedMonth, selectedPricedYear)).length;
    const convertedForMonth = mainDashboardCheckIns.filter(c => convertedStatus[c.id] && matchesSelectedMonthYear(c.checkInTime, selectedConvertedMonth, selectedConvertedYear)).length;
    const totalConverted = mainDashboardCheckIns.filter(c => convertedStatus[c.id]).length;

    // Sales person specific stats
    const totalCustomers = filterSalesPerson 
      ? mainDashboardCheckIns.filter(c => c.draft?.salesPerson === filterSalesPerson).length 
      : mainDashboardCheckIns.length;
    
    const convertedCustomers = filterSalesPerson
      ? mainDashboardCheckIns.filter(c => c.draft?.salesPerson === filterSalesPerson && convertedStatus[c.id]).length
      : mainDashboardCheckIns.filter(c => convertedStatus[c.id]).length;

    const conversionRate = totalCustomers > 0 ? ((convertedCustomers / totalCustomers) * 100).toFixed(1) : '0';

    return {
      pendingPricing,
      pricedToday,
      onHold,
      onHoldForMonth,
      pricedForMonth,
      convertedForMonth,
      totalConverted,
      totalCustomers,
      convertedCustomers,
      conversionRate
    };
  }, [mainDashboardCheckIns, convertedStatus, selectedPricedMonth, selectedPricedYear, selectedOnHoldMonth, selectedOnHoldYear, selectedConvertedMonth, selectedConvertedYear, filterSalesPerson]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <div className="border-b" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Reliance Surfaces" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-xl" style={{ color: 'var(--color-gold)' }}>Analysis Dashboard</h1>
                <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>Welcome, {username}</p>
              </div>
            </div>
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
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('main')}
            className="px-6 py-3 rounded-lg transition-colors"
            style={{ 
              backgroundColor: activeTab === 'main' ? 'var(--color-gold)' : 'var(--color-card)', 
              border: '1px solid var(--color-border)',
              color: activeTab === 'main' ? 'var(--color-background)' : 'var(--color-text-white)',
              fontWeight: activeTab === 'main' ? '600' : 'normal'
            }}
          >
            Main Dashboard
          </button>
          <button
            onClick={() => setActiveTab('holds-not-converted')}
            className="px-6 py-3 rounded-lg transition-colors"
            style={{ 
              backgroundColor: activeTab === 'holds-not-converted' ? 'var(--color-gold)' : 'var(--color-card)', 
              border: '1px solid var(--color-border)',
              color: activeTab === 'holds-not-converted' ? 'var(--color-background)' : 'var(--color-text-white)',
              fontWeight: activeTab === 'holds-not-converted' ? '600' : 'normal'
            }}
          >
            Holds Not Converted ({holdsNotConvertedCheckIns.length})
          </button>
          <button
            onClick={() => setActiveTab('ignored')}
            className="px-6 py-3 rounded-lg transition-colors"
            style={{ 
              backgroundColor: activeTab === 'ignored' ? 'var(--color-gold)' : 'var(--color-card)', 
              border: '1px solid var(--color-border)',
              color: activeTab === 'ignored' ? 'var(--color-background)' : 'var(--color-text-white)',
              fontWeight: activeTab === 'ignored' ? '600' : 'normal'
            }}
          >
            Ignored ({ignoredCheckIns.length})
          </button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--color-text-gray)' }} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, phone, or sheet number..."
                className="w-full pl-10 pr-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg"
              style={{ backgroundColor: showFilters ? 'var(--color-gold)' : 'var(--color-card)', border: '1px solid var(--color-border)', color: showFilters ? 'var(--color-background)' : 'var(--color-text-white)' }}
            >
              <Filter size={20} />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>Sales Person</label>
                <select
                  value={filterSalesPerson}
                  onChange={(e) => setFilterSalesPerson(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                >
                  <option value="">All Sales People</option>
                  {salesPeople.map(sp => (
                    <option key={sp} value={sp}>{sp}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>Fabricator</label>
                <select
                  value={filterFabricator}
                  onChange={(e) => setFilterFabricator(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                >
                  <option value="">All Fabricators</option>
                  {fabricators.map(fab => (
                    <option key={fab.id} value={fab.id}>{fab.companyName}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>Hold Status</label>
                <select
                  value={filterHold}
                  onChange={(e) => setFilterHold(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                >
                  <option value="all">All</option>
                  <option value="hold">On Hold</option>
                  <option value="no-hold">Not On Hold</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>Priced Status</label>
                <select
                  value={filterPriced}
                  onChange={(e) => setFilterPriced(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                >
                  <option value="all">All</option>
                  <option value="priced">Priced</option>
                  <option value="not-priced">Not Priced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>Converted Status</label>
                <select
                  value={filterConverted}
                  onChange={(e) => setFilterConverted(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                >
                  <option value="all">All</option>
                  <option value="yes">Converted</option>
                  <option value="no">Not Converted</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Stats - Show Sales Person stats when filtered */}
        {activeTab === 'main' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filterSalesPerson && (
              <>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '2px solid var(--color-gold)' }}>
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Sales Person: {filterSalesPerson}</p>
                  <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                    {stats.totalCustomers}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-gray)' }}>Total Customers</p>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '2px solid var(--color-gold)' }}>
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Converted</p>
                  <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                    {stats.convertedCustomers}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-gray)' }}>{stats.conversionRate}% Rate</p>
                </div>
              </>
            )}
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Pending Pricing</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {stats.pendingPricing}
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Priced Today</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {stats.pricedToday}
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>On Hold</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {stats.onHold}
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Total Converted</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {stats.totalConverted}
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>On Hold</p>
              <p className="text-2xl mb-2" style={{ color: 'var(--color-gold)' }}>
                {stats.onHoldForMonth}
              </p>
              <div className="flex gap-2">
                <select
                  value={selectedOnHoldMonth}
                  onChange={(e) => setSelectedOnHoldMonth(parseInt(e.target.value))}
                  className="flex-1 text-sm px-2 py-1.5 rounded"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', cursor: 'pointer' }}
                >
                  {monthNames.map((name, idx) => (
                    <option key={idx} value={idx}>{name}</option>
                  ))}
                </select>
                <select
                  value={selectedOnHoldYear}
                  onChange={(e) => setSelectedOnHoldYear(parseInt(e.target.value))}
                  className="flex-1 text-sm px-2 py-1.5 rounded"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', cursor: 'pointer' }}
                >
                  {availableYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>Converted</p>
              <p className="text-2xl mb-2" style={{ color: 'var(--color-gold)' }}>
                {stats.convertedForMonth}
              </p>
              <div className="flex gap-2">
                <select
                  value={selectedConvertedMonth}
                  onChange={(e) => setSelectedConvertedMonth(parseInt(e.target.value))}
                  className="flex-1 text-sm px-2 py-1.5 rounded"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', cursor: 'pointer' }}
                >
                  {monthNames.map((name, idx) => (
                    <option key={idx} value={idx}>{name}</option>
                  ))}
                </select>
                <select
                  value={selectedConvertedYear}
                  onChange={(e) => setSelectedConvertedYear(parseInt(e.target.value))}
                  className="flex-1 text-sm px-2 py-1.5 rounded"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', cursor: 'pointer' }}
                >
                  {availableYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'holds-not-converted' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>On Hold</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {holdsNotConvertedCheckIns.filter(c => c.draft?.isHold).length}
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Not Converted</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {holdsNotConvertedCheckIns.filter(c => !convertedStatus[c.id]).length}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'ignored' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>Total Ignored</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {ignoredCheckIns.length}
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p className="text-sm mb-1" style={{ color: 'var(--color-text-gray)' }}>On Hold</p>
              <p className="text-2xl" style={{ color: 'var(--color-gold)' }}>
                {ignoredCheckIns.filter(c => c.draft?.isHold).length}
              </p>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: 'var(--color-background)' }}>
                <tr>
                  <th className="text-left p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Customer</th>
                  <th className="text-left p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Sheet #</th>
                  <th className="text-left p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Sales Person</th>
                  <th className="text-left p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Fabricator</th>
                  <th className="text-center p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Materials</th>
                  <th className="text-center p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Status</th>
                  <th className="text-center p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Converted</th>
                  {activeTab === 'ignored' && (
                    <th className="text-left p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Lot</th>
                  )}
                  <th className="text-center p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Date</th>
                  <th className="text-center p-4 text-sm" style={{ color: 'var(--color-text-gray)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCheckIns.length === 0 ? (
                  <tr>
                    <td colSpan={activeTab === 'ignored' ? 10 : 9} className="text-center p-8" style={{ color: 'var(--color-text-gray)' }}>
                      No customers found
                    </td>
                  </tr>
                ) : (
                  paginatedCheckIns.map((checkIn) => {
                    const isConverted = convertedStatus[checkIn.id] || false;
                    const isMarkedKnown = markedAsKnown[checkIn.id] || false;
                    const isUndone = undoneItems[checkIn.id] || false;
                    
                    let rowBgColor = 'transparent';
                    if (activeTab === 'ignored' && isMarkedKnown) {
                      rowBgColor = 'rgba(34, 197, 94, 0.2)';
                    } else if (isUndone) {
                      rowBgColor = 'rgba(239, 68, 68, 0.2)';
                    } else if (isConverted) {
                      rowBgColor = 'rgba(212, 167, 54, 0.15)';
                    } else if (checkIn.priced) {
                      rowBgColor = 'rgba(34, 197, 94, 0.1)';
                    }
                    
                    return (
                      <tr 
                        key={checkIn.id} 
                        style={{ 
                          borderBottom: '1px solid var(--color-border)',
                          backgroundColor: rowBgColor
                        }}
                      >
                        <td className="p-4">
                          <div style={{ color: 'var(--color-text-white)' }}>
                            {checkIn.firstName} {checkIn.lastName}
                          </div>
                          <div className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                            {checkIn.phones?.[0]}
                          </div>
                        </td>
                        <td className="p-4" style={{ color: 'var(--color-gold)' }}>
                          {checkIn.draft?.selectionSheetNumber || '-'}
                        </td>
                        <td className="p-4" style={{ color: 'var(--color-text-white)' }}>
                          {checkIn.draft?.salesPerson || '-'}
                        </td>
                        <td className="p-4" style={{ color: 'var(--color-text-white)' }}>
                          {checkIn.draft?.selectedFabricator?.companyName || '-'}
                        </td>
                        <td className="p-4 text-center" style={{ color: 'var(--color-text-white)' }}>
                          {checkIn.draft?.materials?.length || 0}
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center gap-2">
                            {checkIn.priced && (
                              <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}>
                                Priced
                              </span>
                            )}
                            {checkIn.draft?.isHold && (
                              <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24' }}>
                                Hold
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <select
                            value={isConverted ? 'Yes' : 'No'}
                            onChange={(e) => setConvertedStatus({ ...convertedStatus, [checkIn.id]: e.target.value === 'Yes' })}
                            className="px-3 py-1.5 rounded"
                            style={{ 
                              backgroundColor: 'var(--color-background)', 
                              border: isConverted ? '1px solid var(--color-gold)' : '1px solid var(--color-border)', 
                              color: isConverted ? 'var(--color-gold)' : 'var(--color-text-white)',
                              cursor: 'pointer',
                              fontWeight: isConverted ? '600' : 'normal',
                              fontSize: '13px'
                            }}
                          >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </td>
                        {activeTab === 'ignored' && (
                          <td className="p-4" style={{ color: 'var(--color-text-white)' }}>
                            {checkIn.draft?.materials && checkIn.draft.materials.length > 0 ? (
                              <div className="flex flex-col gap-1">
                                {Array.from(new Set(checkIn.draft.materials.map(m => m.lot).filter(Boolean))).map((lot, idx) => (
                                  <span key={idx} className="text-sm">
                                    {lot}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              '-'
                            )}
                          </td>
                        )}
                        <td className="p-4 text-center text-sm" style={{ color: 'var(--color-text-gray)' }}>
                          {formatDate(checkIn.checkInTime)}
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center gap-1">
                            <button
                              onClick={() => handleViewPricing(checkIn)}
                              className="p-2 rounded-lg hover:bg-opacity-80"
                              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
                              title="View/Edit Pricing"
                            >
                              <Eye size={18} />
                            </button>
                            {activeTab === 'holds-not-converted' && (
                              <>
                                <button
                                  onClick={() => handleUndoHold(checkIn.id)}
                                  className="p-2 rounded-lg hover:bg-opacity-80"
                                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.7)', color: 'var(--color-text-white)' }}
                                  title="Undo - Send back to Main"
                                >
                                  <RotateCcw size={18} />
                                </button>
                                <button
                                  onClick={() => handleIgnore(checkIn.id)}
                                  className="p-2 rounded-lg hover:bg-opacity-80"
                                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.8)', color: 'var(--color-text-white)' }}
                                  title="Ignore"
                                >
                                  <X size={18} />
                                </button>
                              </>
                            )}
                            {activeTab === 'ignored' && (
                              <button
                                onClick={() => handleToggleKnown(checkIn.id)}
                                className="p-2 rounded-lg hover:bg-opacity-80"
                                style={{ backgroundColor: isMarkedKnown ? 'rgba(34, 197, 94, 0.8)' : 'rgba(100, 100, 100, 0.5)', color: 'var(--color-text-white)' }}
                                title={isMarkedKnown ? 'Unmark as Known' : 'Mark as Known'}
                              >
                                <Check size={18} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-4" style={{ borderTop: '1px solid var(--color-border)' }}>
              <div className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                Showing {startIndex + 1} to {Math.min(endIndex, filteredCheckIns.length)} of {filteredCheckIns.length} customers
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg transition-colors"
                  style={{ 
                    backgroundColor: currentPage === 1 ? 'var(--color-background)' : 'var(--color-card)', 
                    border: '1px solid var(--color-border)', 
                    color: currentPage === 1 ? 'var(--color-text-gray)' : 'var(--color-text-white)',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className="px-3 py-2 rounded-lg transition-colors"
                      style={{ 
                        backgroundColor: currentPage === page ? 'var(--color-gold)' : 'var(--color-card)', 
                        border: '1px solid var(--color-border)', 
                        color: currentPage === page ? 'var(--color-background)' : 'var(--color-text-white)',
                        fontWeight: currentPage === page ? '600' : 'normal',
                        cursor: 'pointer'
                      }}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg transition-colors"
                  style={{ 
                    backgroundColor: currentPage === totalPages ? 'var(--color-background)' : 'var(--color-card)', 
                    border: '1px solid var(--color-border)', 
                    color: currentPage === totalPages ? 'var(--color-text-gray)' : 'var(--color-text-white)',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pricing Popup - with edit mode for analysis */}
      {selectedCustomer && (
        <PricingPopup
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
          onComplete={(id) => {
            if (onPriceUpdate) {
              onPriceUpdate(id, username);
            }
            onComplete(id);
          }}
          isAnalysisMode={true}
          analysisUser={username}
        />
      )}
    </div>
  );
}