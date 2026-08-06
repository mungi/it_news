---
source_url: https://blog.cloudflare.com/mcp-v2/
title: Cloudflare — The next generation of MCP
ingested: 2026-08-07
published: 2026-08-06
sha256: 7ef891e6c6bbd22219361b39c7deee0d0c5edaf286967211734bd03ea9f130ee
tags: [ai, infra, devtools, cloud, security]
---

# Cloudflare: The next generation of MCP

- Source page publication: 2026-08-06 (Cloudflare page date; no exact source time displayed in this capture).
- Canonical source URL: https://blog.cloudflare.com/mcp-v2/
- Source image: no article-specific `og:image` retained in this capture; site fallback used.

## Source-grounded facts

- Cloudflare describes MCP 2026-07-28 and updated TypeScript, Python, Go, and C# SDKs as a fully stateless core protocol.
- The required handshake, `Mcp-Session-Id`, and protocol sessions are removed from the core request path; each request carries protocol version, client identity, and client capabilities.
- `server/discover` is optional; MCP servers can handle a request and return a result without storing protocol session state.
- `Mcp-Method` and `Mcp-Name` headers are required on Streamable HTTP requests, exposing request class to HTTP infrastructure without JSON-body parsing.
- MRTR replaces open-stream elicitation with `input_required`, client input collection, and retry; Cloudflare calls this a breaking change for the old elicitation model.
- Cloudflare describes pre-registered clients as preferred, CIMD for dynamic registration, DCR as deprecated for new implementations and planned for removal after summer 2027.
- RFC 9207 issuer comparison and RFC 8707 resource audience binding are described as authorization protections.
- Roots, Sampling, Logging, DCR, and legacy HTTP+SSE are listed as deprecated with a minimum 12-month removal window.

## Engineering handling

- Treat stateless transport migration separately from application state for approvals, tool side effects, task progress, idempotency, and audit records.
- Validate gateway header forwarding and consistency, OAuth issuer/resource audience, MRTR retry behavior, and write-tool rollback before broad rollout.
