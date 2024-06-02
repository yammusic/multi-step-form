/**
 * Represents the properties for the Snackbar component.
 */
export interface SnackbarProps {
  /**
   * The background color of the snackbar.
   * @default gray
   */
  color?: string

  /**
   * The message to be displayed in the snackbar.
   */
  message: string

  /**
   * A callback function that is called when the snackbar is closed.
   */
  onClose: () => void
}
