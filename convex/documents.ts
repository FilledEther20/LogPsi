import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getDocuments = query({
  handler: async (ctx) => {
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
    // console.log(userId)
    if (!userId) {
      return [];
    }
    return await ctx.db
      .query("documents")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", userId))
      .collect();
  },
});

export const createDocument = mutation({
  args: {
    title: v.string(),
  },
  async handler(ctx, args) {
    // Authenticated route
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
    // console.log(userId)
    if (!userId) {
      throw new ConvexError("Not authenticated");
    }
    await ctx.db.insert("documents", {
      title: args.title,
      tokenIdentifier: userId,
    });
  },
});
