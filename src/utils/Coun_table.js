let liveElements = [];
const each = Array.prototype.forEach;

function decode(string) {
    const output = [];
    let counter = 0;
    const length = string.length;

    while (counter < length) {
        const value = string.charCodeAt(counter++);

        if (value >= 0xd800 && value <= 0xdbff && counter < length) {
            const extra = string.charCodeAt(counter++);

            if ((extra & 0xfc00) == 0xdc00) {
                output.push(
                    ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000,
                );
            } else {
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }

    return output;
}

function validateArguments(targets, callback) {
    const nodes = Object.prototype.toString.call(targets);
    const targetsValid =
        typeof targets === 'string' ||
        nodes === '[object NodeList]' ||
        nodes === '[object HTMLCollection]' ||
        targets.nodeType === 1;
    const callbackValid = typeof callback === 'function';

    if (!targetsValid) console.error('Countable: Not a valid target');
    if (!callbackValid)
        console.error('Countable: Not a valid callback function');

    return targetsValid && callbackValid;
}

function count(target, options) {
    let original =
        '' +
        (typeof target === 'string'
            ? target
            : 'value' in target
            ? target.value
            : target.textContent);
    options = options || {};

    if (options.stripTags) original = original.replace(/<\/?[a-z][^>]*>/gi, '');

    if (options.ignore) {
        each.call(options.ignore, function (i) {
            original = original.replace(i, '');
        });
    }

    const trimmed = original.trim();

    return {
        paragraphs: trimmed
            ? (trimmed.match(options.hardReturns ? /\n{2,}/g : /\n+/g) || [])
                  .length + 1
            : 0,
        sentences: trimmed ? (trimmed.match(/[.?!…]+./g) || []).length + 1 : 0,
        words: trimmed
            ? (trimmed.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || [])
                  .length
            : 0,
        characters: trimmed ? decode(trimmed.replace(/\s/g, '')).length : 0,
        all: decode(original).length,
    };
}

const Countable = {
    on: function (elements, callback, options) {
        if (!validateArguments(elements, callback)) return;

        if (!Array.isArray(elements)) {
            elements = [elements];
        }

        each.call(elements, function (e) {
            const handler = function () {
                callback.call(e, count(e, options));
            };

            liveElements.push({ element: e, handler: handler });

            handler();

            e.addEventListener('input', handler);
        });

        return this;
    },

    off: function (elements) {
        if (!validateArguments(elements, function () {})) return;

        if (!Array.isArray(elements)) {
            elements = [elements];
        }

        liveElements
            .filter(function (e) {
                return elements.indexOf(e.element) !== -1;
            })
            .forEach(function (e) {
                e.element.removeEventListener('input', e.handler);
            });

        liveElements = liveElements.filter(function (e) {
            return elements.indexOf(e.element) === -1;
        });

        return this;
    },

    count: function (targets, callback, options) {
        if (!validateArguments(targets, callback)) return;

        if (!Array.isArray(targets)) {
            targets = [targets];
        }

        each.call(targets, function (e) {
            callback.call(e, count(e, options));
        });

        return this;
    },

    enabled: function (elements) {
        if (elements.length === undefined) {
            elements = [elements];
        }

        return (
            liveElements.filter(function (e) {
                return elements.indexOf(e.element) !== -1;
            }).length === elements.length
        );
    },
};
export default Countable;
