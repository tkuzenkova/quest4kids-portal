import { IUser } from "@/core/types/users";

interface ListProps {
	users?: IUser[];
}

const ListComponent: React.FC<ListProps> = ({ users }) => {
	return (
		<div className="p-4">
			<ul className="divide-y divide-gray-200">
				{users?.map(user => (
					<li key={user.id} className="flex items-center py-4">
						<div className="ml-3">
							<p className="text-lg font-medium text-gray-900">
								{user.name}
							</p>
							<p className="text-gray-500">{user.username}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListComponent;
