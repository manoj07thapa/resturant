import useSwr from 'swr';
import { useUser } from '@auth0/nextjs-auth0';

export const GetShipInfo = () => {
	const { user } = useUser();

	const { data, error, mutate } = useSwr(user ? `/api/user/shipInfo` : null);
	return {
		shipInfo: data,
		shipLoading: !error && !data,
		shipError: error,
		mutate
	};
};
