import { TemplateResult } from 'lit';

/**
 * Configuration to show a modal
 *
 * @export
 * @class ModalConfig
 */
export class ModalConfig {
  /**
   * The title that shows in the header
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  title?: TemplateResult;

  /**
   * The subtitle shown in the header under the title
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  subtitle?: TemplateResult;

  /**
   * The headline shown at the top of the content section
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  headline?: TemplateResult;

  /**
   * The text shown below the headline in the content section
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  message?: TemplateResult;

  /**
   * The color of the header
   *
   * @memberof ModalConfig
   */
  headerColor: string;

  /**
   * Show or hide the processing indicator
   *
   * @memberof ModalConfig
   */
  showProcessingIndicator: boolean;

  /**
   * Set the processing image mode, currently `processing` or `complete`
   *
   * @memberof ModalConfig
   */
  processingImageMode: string;

  /**
   * Show the close button
   *
   * @memberof ModalConfig
   */
  showCloseButton: boolean;

  /**
   * Close the modal if the user taps on the background
   *
   * @memberof ModalConfig
   */
  closeOnBackdropClick: boolean;

  constructor(options?: {
    title?: TemplateResult;
    subtitle?: TemplateResult;
    headline?: TemplateResult;
    message?: TemplateResult;
    headerColor?: string;
    showProcessingIndicator?: boolean;
    processingImageMode?: string;
    showCloseButton?: boolean;
    closeOnBackdropClick?: boolean;
  }) {
    this.title = options?.title;
    this.subtitle = options?.subtitle;
    this.headline = options?.headline;
    this.message = options?.message;

    this.headerColor = options?.headerColor ?? '#55A183';
    this.showProcessingIndicator = options?.showProcessingIndicator ?? false;
    this.processingImageMode = options?.processingImageMode ?? 'complete';
    this.showCloseButton = options?.showCloseButton ?? true;
    this.closeOnBackdropClick = options?.closeOnBackdropClick ?? true;
  }
}
