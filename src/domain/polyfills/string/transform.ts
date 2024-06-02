declare global {
  interface String {
    camelCase(): string
    camelCaseToSpace(): string
    capitalize(): string
    capitalizeFirst(): string
    humanize(): string
    onlyNumbers(): string
    toSpace(indicators: string[]): string
  }
}

if (!String.prototype.camelCase) {
  /**
   * Converts a string to camel case.
   */
  String.prototype.camelCase = function() {
    return this.capitalize().replaceAll(' ', '')
  }
}

if (!String.prototype.camelCaseToSpace) {
  /**
   * Converts a camel case string to space case.
   */
  String.prototype.camelCaseToSpace = function() {
    const camelMatch = /([A-Z])/g
    const str = this.replaceAll(' ', '').replace(camelMatch, ' $1')
    return str.trim()
  }
}

if (!String.prototype.capitalize) {
  /**
   * Capitalizes the first letter of each word in the string and converts it to space case.
   */
  String.prototype.capitalize = function() {
    const words = this.toSpace(['-', '_']).split(' ')
    const str = words.map(str => str.capitalizeFirst()).join(' ')
    return str.camelCaseToSpace()
  }
}

if (!String.prototype.capitalizeFirst) {
  /**
   * Capitalizes the first letter of a string and converts the rest to lowercase.
   */
  String.prototype.capitalizeFirst = function() {
    const [first, body] = [
      this.charAt(0).toUpperCase(),
      this.slice(1).toLowerCase(),
    ]
    return `${first}${body}`
  }
}

if (!String.prototype.humanize) {
  /**
   * Converts a string to human-readable format by capitalizing the first letter of each word and capitalizing the first letter of the first word.
   */
  String.prototype.humanize = function() {
    const str = this.capitalize()
    return str.capitalizeFirst()
  }
}

if (!String.prototype.onlyNumbers) {
  /**
   * Returns a string with only the numbers from the original string.
   */
  String.prototype.onlyNumbers = function() {
    return this.replace(/\D/g, '')
  }
}

if (!String.prototype.toSpace) {
  /**
   * Replaces all occurrences of characters in the given `indicators` array with a space character.
   *
   * @param {string[]} indicators - An array of characters to be replaced with a space.
   */
  String.prototype.toSpace = function(indicators) {
    const regex = new RegExp(`([${indicators.join('')}])`, 'g')
    return this.replace(regex, ' ')
  }
}

export {}
