import Dashboard from "../Dashboard";

export default function AdminDashboard() {
	return (
		<div className="space-y-6">
			{/* Admin Header */}
			<div className="mb-4">
				<h1 className="text-3xl font-bold text-gray-800 font-(family-name:--font-crimson)">
					Dashboard
				</h1>
				<p className="text-gray-500 mt-1">Overview of platform statistics and activity.</p>
			</div>
			
			{/* Embed the Dashboard component */}
			<div className="-mx-6 -mb-6">
				<Dashboard isEmbedded={true} />
			</div>
		</div>
	);
}
