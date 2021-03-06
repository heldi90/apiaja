/* eslint-disable func-names */
module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      username: String,
      password: String,
      score: Number,
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model('players', schema);

  return Post;
};
