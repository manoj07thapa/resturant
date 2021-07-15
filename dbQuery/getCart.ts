import useSwr from 'swr';
import { useUser } from '@auth0/nextjs-auth0';

export const GetCart = () => {
	const { user } = useUser();

	const { data, error, mutate } = useSwr(user ? `/api/cart` : null);
	return {
		cart: data,
		isLoading: !error && !data,
		isError: error,
		mutate
	};
};
