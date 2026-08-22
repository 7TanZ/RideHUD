// ============================================================
//  EDIT THIS FILE — paste your Firebase config below.
//  Firebase console → Project settings → Your apps → Web app
//  These keys are PUBLIC by design. They are identifiers, not
//  secrets. Security comes from your Realtime Database rules.
// ============================================================

export const firebaseConfig = {
  apiKey:            "PASTE_API_KEY",
  authDomain:        "PASTE_PROJECT.firebaseapp.com",
  databaseURL:       "https://PASTE_PROJECT-default-rtdb.firebaseio.com",
  projectId:         "PASTE_PROJECT",
  storageBucket:     "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId:             "PASTE_APP_ID"
};

// Riders are considered STALE after this many ms without an update.
// Below this, we show a distance. Above it, we show NO SIGNAL.
export const STALE_MS = 20000;

// Drop riders entirely after this long (they left the ride).
export const DROP_MS = 300000;
