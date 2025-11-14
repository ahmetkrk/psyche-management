# SWB-AI Analytics Şeması (swb-v1)

**schema:** `swb`
**schema_version:** `1`

## Section Key'ler
- `iam` → `/`
- `insidelab` → `/insightlab`
- `studio` → `/studio`
- `echoes` → `/echoes`
- `contact` → `/contact`
- `flow` → `/flow`
- `academy` → `/academy` (ileride)
- `vault` → `/vault` (ileride)

## Event'ler
- `virtual_page_view`
- `click_action`
- `scroll_depth`
- `form_submit`

## Zorunlu Alanlar
schema, schema_version, event_name, section_key, action_key, page_location, session_id, timestamp

## Meta alanları
source, depth, label, utm_source, utm_medium, utm_campaign, user_id
