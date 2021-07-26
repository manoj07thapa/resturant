import useSwr from 'swr';
import { useUser } from '@auth0/nextjs-auth0';

export const GetFavourites = () => {
	const { user } = useUser();

	const { data, error, mutate } = useSwr(user ? `/api/favourite` : null);
	return {
		favourite: data,
		isFavLoading: !error && !data,
		isFavError: error,
		mutate
	};
};
