/**
 * birdfyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for BirdFYI */
      'birdfyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'iucn-badge' | 'iucn-inline' | 'taxonomy-inline';
      /** Entity slug (e.g. "birds") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'organic';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
