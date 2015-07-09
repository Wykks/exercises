module.exports = transmitter;

function transmitter(options, cb) {
    function processLetter(code, lettercb) {
        function processCode(j) {
            var time = code[j] === '.' ? 1 : 3;
            options.toggle();
            options.timeouter(function() {
                options.toggle();
                j++;
                if (j >= code.length) {
                    lettercb();
                    return;
                }
                options.timeouter(function() {
                     processCode(j);
                }, 1);
            }, time);
        }
        
        processCode(0);
    }
    
    function processWord(pos, wordcb) {
        function subProcessWord(index) {
            var code = options.codes[options.message[index]];
            if (!code) {
                cb.call(this, 'Unknow char ' + options.message[index]);
                return;
            }
            processLetter(code, function() {
                index++;
                if (index >= options.message.length || options.message[index] === ' ') {
                    wordcb(index);
                    return;
                }
                options.timeouter(function() {
                    subProcessWord(index);
                }, 3);
            });
            return;
        }
        subProcessWord(pos);
    }
    
    function processMessage(pos) {
        processWord(pos, function(index) {
            var diff = index;
            while (diff < options.message.length && options.message[diff] === ' ')
                diff++;
            if (diff >= options.message.length) {
                cb();
                return;
            }
            options.timeouter(function() {
                processMessage(diff);
            }, 7 * (diff - index));
        });
    }
    
    var start = 0;
    while (start < options.message.length && options.message[start] === ' ')
        start++;
    if (start >= options.message.length) {
        cb();
        return;
    }
    processMessage(start);
}

