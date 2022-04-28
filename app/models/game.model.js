function GameModel(mongoose) {
  const gameSchema = mongoose.Schema({
    id: Number,
    rank: Number,
    name: String,
    imageUrl: String,
    allTimePeak: Number,
  });

  return mongoose.model('Game', gameSchema);
}

export default GameModel;
