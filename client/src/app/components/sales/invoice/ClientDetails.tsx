export default function ClientDetails() {
  return (
    <div className="bg-white rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Client Details Section */}
      <div className="flex-1">
        <h3 className="text-[#075FB7] text-[13px] font-semibold mb-3">Client Details</h3>
        <p className="text-gray-900 font-bold text-[15px] mb-1.5">Global Tech Industries Inc.</p>
        <p className="text-[#475467] text-sm mb-1">Attn: Michael Sterling</p>
        <p className="text-[#475467] text-sm">m.sterling@globaltech.com</p>
      </div>

      {/* Billing Address Section */}
      <div className="flex-1">
        <h3 className="text-[#075FB7] text-[13px] font-semibold mb-3">Billing Address</h3>
        <p className="text-[#475467] text-sm mb-1">1012 Innovation Drive, Silicon Valley</p>
        <p className="text-[#475467] text-sm mb-1">San Jose, CA 95134</p>
        <p className="text-[#475467] text-sm">United States</p>
      </div>
    </div>
  );
}
