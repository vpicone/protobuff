const Mutation = {
  async createProject(p, args, ctx, info) {
    // check if logged in
    const project = await ctx.db.mutation.createProject(
      {
        data: { ...args },
      },
      info
    );
    return project;
  },
};

module.exports = Mutation;
