import {
  CARD_REVEALED,
  JOINED_GAME,
  ASSETS
} from '../actions/game';

const defaultState = {
  knownCards: {
  },
  metadata: {
  }
};

export default function reduce (state, action) {
  if (!state) {
    state = defaultState;
  }

  switch (action.type) {
    case ASSETS:
      console.log('Assets:', action.data);
      state = {...state,
        metadata: {...state.metadata}
      };
      action.data.assets.forEach(function (card) {
        state.metadata[card.id] = card;
      });
      break;
    case CARD_REVEALED:
      state = {...state,
        knownCards: {...state.knownCards,
          [action.data.card]: action.data.asset
        }
      };
      break;
    case JOINED_GAME:
      console.log(action.data);
      state = {...state,
        knownCards: {...state.knownCards}
      };

      Object.keys(action.data.snapshot.deck).forEach(function (name) {
        let card = action.data.snapshot.deck[name];
        if (card.asset) {
          state.knownCards[name] = card.asset;
        }
      });
      break;
  }

  return state;
}
