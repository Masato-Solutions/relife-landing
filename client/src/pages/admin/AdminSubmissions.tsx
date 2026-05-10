import { useSubmissions } from "@/hooks/useContent";

export default function AdminSubmissions() {
  const { data: submissions, loading } = useSubmissions();

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Contact Form Submissions ({submissions?.length ?? 0})</h2>
        <p className="text-gray-500 text-sm mt-1">All messages submitted through the contact form.</p>
      </div>

      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : !submissions || submissions.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-400 text-lg font-medium">No submissions yet</p>
          <p className="text-gray-400 text-sm mt-1">Contact form submissions will appear here.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Date / Time</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Subject</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">Message</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors align-top">
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">
                      {new Date(sub.submittedAt).toLocaleDateString()}<br />
                      <span className="text-gray-400">{new Date(sub.submittedAt).toLocaleTimeString()}</span>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">{sub.name}</td>
                    <td className="px-4 py-3 text-gray-600">
                      <a href={`mailto:${sub.email}`} className="hover:text-blue-500">{sub.email}</a>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{sub.subject}</td>
                    <td className="px-4 py-3 text-gray-500 hidden lg:table-cell max-w-xs">
                      <p className="line-clamp-2">{sub.message}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
