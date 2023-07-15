// lib/server/lucia.ts
import lucia from 'lucia-auth'
import { sveltekit } from "lucia-auth/middleware"
import { PrismaClient } from "@prisma/client"
import prisma from '@lucia-auth/adapter-prisma'

export const auth = lucia({
	adapter: prisma(new PrismaClient()),
	env: "DEV", // "PROD" if prod
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			username: userData.username
		};
	}
});
