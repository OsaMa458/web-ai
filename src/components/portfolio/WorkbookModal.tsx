import React, { useState } from 'react';
import { X, Table, Calculator, Truck, CheckCircle2, ShieldCheck, Download, ExternalLink, HelpCircle } from 'lucide-react';
import {
  productResearchData,
  supplierComparisonData,
  storeSetupChecklist,
  complianceAuditData,
} from '../../data/workbookData';

interface WorkbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'research' | 'sourcing' | 'checklist' | 'compliance';
}

export const WorkbookModal: React.FC<WorkbookModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'research',
}) => {
  const [activeTab, setActiveTab] = useState<'research' | 'sourcing' | 'checklist' | 'compliance'>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="workbook-modal-title"
    >
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#181B1F] border border-[#2B3036] rounded-2xl shadow-2xl overflow-hidden animate-fadeIn text-[#F5F5F2]">
        
        {/* Header */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-[#2B3036] flex items-center justify-between gap-4 bg-[#111315]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#20242A] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD]">
              <Table className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="workbook-modal-title" className="text-base sm:text-lg font-bold text-[#F5F5F2] tracking-tight">
                  Interactive E-commerce Operations Workbook
                </h2>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#20242A] text-[#6B8AFD] border border-[#2B3036]">
                  Sample Demo
                </span>
              </div>
              <p className="text-xs text-[#A7ADB4]">
                Inspect how product economics, fees, sourcing evidence, and marketplace setup checklists are calculated.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A] transition-colors cursor-pointer"
            aria-label="Close workbook"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-6 pt-3 border-b border-[#2B3036] flex flex-wrap gap-2 bg-[#111315]/70">
          <button
            onClick={() => setActiveTab('research')}
            className={`px-3.5 py-2 rounded-t-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 border-b-2 cursor-pointer ${
              activeTab === 'research'
                ? 'border-[#6B8AFD] text-[#6B8AFD] bg-[#20242A]'
                : 'border-transparent text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]/40'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Product Research & Profitability</span>
          </button>

          <button
            onClick={() => setActiveTab('sourcing')}
            className={`px-3.5 py-2 rounded-t-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 border-b-2 cursor-pointer ${
              activeTab === 'sourcing'
                ? 'border-[#6B8AFD] text-[#6B8AFD] bg-[#20242A]'
                : 'border-transparent text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]/40'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Supplier Comparison</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-3.5 py-2 rounded-t-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 border-b-2 cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-[#6B8AFD] text-[#6B8AFD] bg-[#20242A]'
                : 'border-transparent text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]/40'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Store Setup Checklist</span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-3.5 py-2 rounded-t-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 border-b-2 cursor-pointer ${
              activeTab === 'compliance'
                ? 'border-[#6B8AFD] text-[#6B8AFD] bg-[#20242A]'
                : 'border-transparent text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]/40'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Compliance Audit</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Notice Banner */}
          <div className="p-3.5 rounded-xl bg-[#20242A] border border-[#2B3036] text-xs text-[#A7ADB4] flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-[#6B8AFD] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#F5F5F2]">Transparent Demonstration:</strong> This workbook showcases practical analysis frameworks using published fee schedules (Walmart standard 15% referral fee vs. TikTok Shop US standard 8% fee). Figures represent planning templates, not fabricated client revenue.
            </p>
          </div>

          {/* TAB 1: PRODUCT RESEARCH */}
          {activeTab === 'research' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#20242A] border border-[#2B3036]">
                  <span className="text-[11px] text-[#A7ADB4] block">Avg. Walmart Margin</span>
                  <span className="text-base font-bold text-emerald-400">46.8%</span>
                </div>
                <div className="p-3 rounded-xl bg-[#20242A] border border-[#2B3036]">
                  <span className="text-[11px] text-[#A7ADB4] block">Avg. TikTok Shop Margin</span>
                  <span className="text-base font-bold text-[#6B8AFD]">51.2%</span>
                </div>
                <div className="p-3 rounded-xl bg-[#20242A] border border-[#2B3036]">
                  <span className="text-[11px] text-[#A7ADB4] block">Lowest Landed Cost</span>
                  <span className="text-base font-bold text-[#F5F5F2]">$1.00</span>
                </div>
                <div className="p-3 rounded-xl bg-[#20242A] border border-[#2B3036]">
                  <span className="text-[11px] text-[#A7ADB4] block">Products Scored</span>
                  <span className="text-base font-bold text-[#6B8AFD]">6 Sample Items</span>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#2B3036] bg-[#20242A]">
                <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#181B1F] text-[#A7ADB4] font-semibold border-b border-[#2B3036]">
                      <th className="p-3">Product Name</th>
                      <th className="p-3">Landed Cost</th>
                      <th className="p-3">Walmart Price (15% Fee)</th>
                      <th className="p-3">Walmart Margin</th>
                      <th className="p-3">TikTok Price (8% Fee)</th>
                      <th className="p-3">TikTok Margin</th>
                      <th className="p-3">Demand Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2B3036] font-mono">
                    {productResearchData.map((row) => {
                      const landedCost = row.unitCost + row.shipping;
                      const wmFee = row.wmPrice * row.wmFeeRate;
                      const wmProfit = row.wmPrice - wmFee - landedCost;
                      const wmMargin = (wmProfit / row.wmPrice) * 100;

                      const ttFee = row.ttPrice * row.ttFeeRate;
                      const ttProfit = row.ttPrice - ttFee - landedCost;
                      const ttMargin = (ttProfit / row.ttPrice) * 100;

                      return (
                        <tr key={row.product} className="hover:bg-[#252A30] transition-colors">
                          <td className="p-3 font-sans font-medium text-[#F5F5F2]">{row.product}</td>
                          <td className="p-3 text-[#A7ADB4]">${landedCost.toFixed(2)}</td>
                          <td className="p-3 text-[#A7ADB4]">${row.wmPrice.toFixed(2)}</td>
                          <td className="p-3 font-bold text-emerald-400">{wmMargin.toFixed(1)}%</td>
                          <td className="p-3 text-[#A7ADB4]">${row.ttPrice.toFixed(2)}</td>
                          <td className="p-3 font-bold text-[#6B8AFD]">{ttMargin.toFixed(1)}%</td>
                          <td className="p-3 font-sans text-[#6B8AFD] font-bold">{row.demandScore}/5</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: SUPPLIER COMPARISON */}
          {activeTab === 'sourcing' && (
            <div className="overflow-x-auto rounded-xl border border-[#2B3036] bg-[#20242A]">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#181B1F] text-[#A7ADB4] font-semibold border-b border-[#2B3036]">
                    <th className="p-3">Product</th>
                    <th className="p-3">Verified Supplier</th>
                    <th className="p-3">MOQ</th>
                    <th className="p-3">Lead Time</th>
                    <th className="p-3">Compliance Evidence</th>
                    <th className="p-3">Backup Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2B3036]">
                  {supplierComparisonData.map((row) => (
                    <tr key={row.product} className="hover:bg-[#252A30] transition-colors">
                      <td className="p-3 font-medium text-[#F5F5F2]">{row.product}</td>
                      <td className="p-3 text-[#A7ADB4]">{row.supplier}</td>
                      <td className="p-3 text-[#6B8AFD] font-mono font-medium">{row.moq}</td>
                      <td className="p-3 text-[#A7ADB4]">{row.leadTime}</td>
                      <td className="p-3 text-emerald-400 text-[11px]">{row.evidence}</td>
                      <td className="p-3 text-[#A7ADB4] text-[11px]">{row.backupAvailable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: STORE CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-2">
              {storeSetupChecklist.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#20242A] border border-[#2B3036] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#F5F5F2]">{item.step}</p>
                      <p className="text-xs text-[#A7ADB4]">{item.notes}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: COMPLIANCE AUDIT */}
          {activeTab === 'compliance' && (
            <div className="space-y-2">
              {complianceAuditData.map((audit, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#20242A] border border-[#2B3036] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#6B8AFD] shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#F5F5F2]">{audit.check}</p>
                      <p className="text-xs text-[#A7ADB4]">{audit.notes}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#6B8AFD]/10 text-[#6B8AFD] border border-[#6B8AFD]/20 shrink-0">
                    {audit.result}
                  </span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-5 py-3 sm:px-6 sm:py-4 border-t border-[#2B3036] bg-[#111315] flex items-center justify-between text-xs text-[#A7ADB4]">
          <span>Need custom product economics or a store setup audit?</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] font-semibold transition-colors cursor-pointer"
          >
            Done Inspecting
          </button>
        </div>

      </div>
    </div>
  );
};
