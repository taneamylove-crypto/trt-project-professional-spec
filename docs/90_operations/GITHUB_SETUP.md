# GitHub Setup

Repository baseline:

- default branch: `main`
- development branch: `develop`
- CI: GitHub Actions workflow at `.github/workflows/ci.yml`
- package manager: pnpm

Recommended GitHub settings:

1. Protect `main`.
2. Require pull requests before merge.
3. Require the `CI / Repository checks` status check.
4. Disallow direct pushes to `main` after the initial bootstrap.
5. Enable Dependabot after dependency policies are approved.
