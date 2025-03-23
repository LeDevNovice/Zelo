# Changelog

<!-- 
## [1.0.0] - xx month yy
### Changes
### Features
### Fixes
 -->

## [0.0.2] - Unreleased
### Feature
 - Add core validation types and result structure
   - Implement `ZType<TInput, TOutput>` as the base interface for all schema types
   - Add `ValidationResult<T>` discriminated union for parse outputs
   - Define `ValidationError` structure with path, message, code and meta
   - Provide `isValid()` type guard for narrowing validated results 

## [0.0.1] - 23/03/2025
### Chore
 - Initialize project configuration and requirements.
   - CI and template for pull request validation and formatting
   - Folder architecture
   - Project necessary dependencies