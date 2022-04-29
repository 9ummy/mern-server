import * as autoIncrement from 'mongoose-auto-increment';
function GameModel(mongoose) {
  const gameSchema = mongoose.Schema({
    id: Number,
    rank: Number,
    name: String,
    imageUrl: String,
    allTimePeak: Number,
  });

  gameSchema.plugin(autoIncrement.plugin, {
    model: 'Game',
    field: 'id',
    startAt: 1000,
    increment: 1,
  });

  return mongoose.model('Game', gameSchema);
}

export default GameModel;
