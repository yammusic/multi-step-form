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
  String.prototype.camelCase = function() {
    return this.capitalize().replaceAll(' ', '')
  }
}

if (!String.prototype.camelCaseToSpace) {
  String.prototype.camelCaseToSpace = function() {
    const camelMatch = /([A-Z])/g
    const str = this.replaceAll(' ', '').replace(camelMatch, ' $1')
    return str.trim()
  }
}

if (!String.prototype.capitalize) {
  String.prototype.capitalize = function() {
    const words = this.toSpace(['-', '_']).split(' ')
    const str = words.map(str => str.capitalizeFirst()).join(' ')
    return str.camelCaseToSpace()
  }
}

if (!String.prototype.capitalizeFirst) {
  String.prototype.capitalizeFirst = function() {
    const [first, body] = [
      this.charAt(0).toUpperCase(),
      this.slice(1).toLowerCase(),
    ]
    return `${first}${body}`
  }
}

if (!String.prototype.humanize) {
  String.prototype.humanize = function() {
    const str = this.capitalize()
    return str.capitalizeFirst()
  }
}

if (!String.prototype.onlyNumbers) {
  String.prototype.onlyNumbers = function() {
    return this.replace(/\D/g, '')
  }
}

if (!String.prototype.toSpace) {
  String.prototype.toSpace = function(indicators) {
    const regex = new RegExp(`([${indicators.join('')}])`, 'g')
    return this.replace(regex, ' ')
  }
}

export {}
