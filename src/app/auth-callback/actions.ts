'use server';

import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export const getAuthStatus = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user?.id || !user?.email) {
		throw new Error('Invalid user');
	}

	const existingUser = await db.user.findFirst({
		where: { id: user.id },
	});

	console.log(existingUser, user.id);

	if (!existingUser) {
		await db.user.create({
			data: {
				id: user.id,
				email: user.email,
			},
		});
	}

	return { success: true };
};
// http://localhost:3000/configure/preview?id=cm2nid9h90000djvzh6qzmrnp
