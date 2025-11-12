# CineShield: Attack ↔ Defense Demos

## Reflected XSS
- **Attack input:** `<img src=x onerror=alert('XSS')>`
- **Vulnerable (before):** alert executes on view.
- **Defenses:** client sanitize → server sanitize → CSP blocks inline.
- **Evidence:** screenshot A (vulnerable) vs screenshot B (blocked).

## Stored XSS
- **Attack:** malicious comment stored, triggers for all viewers.
- **Defenses:** input validation, server sanitize, CSP.
- **Evidence:** DB entry sanitized; no popup; CSP blocks inline script.

## DOM-based XSS
- **Attack:** crafted `?id=<payload>` used in DOM sinks.
- **Defenses:** input encoding + no innerHTML usage + CSP.
- **Evidence:** payload renders as harmless text.