# XDG Ride · Gap HUD

Live rider-to-rider gap distance on Meta Ray-Ban Display glasses.
Every rider's phone publishes GPS; the leader's glasses render one number.

## Files

| File | Runs on | Purpose |
|---|---|---|
| `index.html` | Glasses (600×600) | The HUD. Reads only. No GPS, no sensors. |
| `rider.html` | Every rider's phone | Publishes GPS. Speaks gap to helmet intercom. |
| `test.html` | Glasses | Smoke test — run this FIRST. |
| `config.js` | Both | **The only file you edit.** Firebase keys. |

## 1. Firebase (3 min)

1. console.firebase.google.com → Add project → skip Analytics
2. Build → **Realtime Database** → Create → **Start in test mode**
3. Project settings → Your apps → Web (`</>`) → register → copy the config
4. Paste it into `config.js`
5. Copy the `databaseURL` too — it's not always in the snippet. Realtime
   Database page → the `https://...firebaseio.com` URL at the top.

Test-mode rules expire in 30 days and are wide open. Fine for a demo.
For anything longer, restrict to `/rides`:

```json
{ "rules": { "rides": { ".read": true, ".write": true } } }
```

## 2. GitHub Pages (3 min)

1. github.com → **+** → New repository → name `ride-gap` → **Public** → Create
2. **Add file → Upload files** → drag in all 4 files → Commit to `main`
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / root → Save
4. Wait ~60s for the green "Your site is live" banner

CLI alternative:

```bash
cd ride-gap
git init && git add . && git commit -m "ride gap hud"
git branch -M main
git remote add origin https://github.com/USERNAME/ride-gap.git
git push -u origin main
# then enable Pages in Settings → Pages
```

## 3. URLs

```
https://USERNAME.github.io/ride-gap/test.html            ← run this first
https://USERNAME.github.io/ride-gap/rider.html           ← every rider's phone
https://USERNAME.github.io/ride-gap/?ride=MUM01&me=ID    ← the glasses
https://USERNAME.github.io/ride-gap/?demo=1              ← no phones needed
```

## 4. Finding your rider id

The HUD needs to know which rider is *you*, so it can measure from your
position. Open `rider.html` on your own phone, join the ride, then in the
console (or via remote debugging) run:

```js
localStorage.getItem('xdg-rider-id')
```

Put that in the HUD URL as `&me=`. Or just set it yourself before joining:

```js
localStorage.setItem('xdg-rider-id', 'leader')
```

then use `&me=leader`.

## 5. Demo script (2 min)

1. Open `?demo=1` on the glasses — proves the display works with zero setup
2. Two phones on `rider.html`, same ride code, walk 30m apart — the number moves
3. Put one phone in airplane mode → HUD flips to `NO SIGNAL · 12s`

That third step is the one that shows this is a safety tool, not a toy.

## Known limits

- **Straight-line, not road distance.** On switchbacks, 200m crow-flight can be
  1.2km of riding. Say "gap", not "distance behind".
- **Everyone must open the link.** No link, no rider. This is a consent feature.
- **Needs mobile data** along the route.
- **High-accuracy GPS eats battery** — fine for 30 min, a real cost over 4 hours.
