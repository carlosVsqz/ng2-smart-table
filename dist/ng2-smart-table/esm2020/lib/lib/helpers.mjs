import { cloneDeep } from 'lodash';
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
export class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
export function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
export function getPageForRowIndex(index, perPage) {
    // we need to add 1 to convert 0-based index to 1-based page number.
    return Math.floor(index / perPage) + 1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2xpYi9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFbkM7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsVUFBUyxHQUFHLE9BQW1CO0lBQ3ZELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVCLHVEQUF1RDtJQUN2RCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRELElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUViLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtRQUN4QiwrQ0FBK0M7UUFDL0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUc7WUFDcEMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWU7WUFDbEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFFNUIsdUJBQXVCO1lBQ3ZCLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtnQkFDbEIsT0FBTztnQkFFUDs7O21CQUdHO2FBQ0o7aUJBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsT0FBTztnQkFFUCx5REFBeUQ7YUFDMUQ7aUJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2dCQUVQLHlEQUF5RDthQUMxRDtpQkFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPO2dCQUVQLDJEQUEyRDthQUM1RDtpQkFBTTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNSO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLE1BQU0sT0FBTyxRQUFRO0lBT25CO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVELHlFQUF5RTtBQUN6RSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxJQUFZLEVBQUUsWUFBa0I7SUFDN0UsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixtQkFBbUI7SUFDbkIsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDakIsSUFBSSxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzVDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM3RCxDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWEsRUFBRSxPQUFlO0lBQy9ELG9FQUFvRTtJQUNwRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbi8qKlxyXG4gKiBFeHRlbmRpbmcgb2JqZWN0IHRoYXQgZW50ZXJlZCBpbiBmaXJzdCBhcmd1bWVudC5cclxuICpcclxuICogUmV0dXJucyBleHRlbmRlZCBvYmplY3Qgb3IgZmFsc2UgaWYgaGF2ZSBubyB0YXJnZXQgb2JqZWN0IG9yIGluY29ycmVjdCB0eXBlLlxyXG4gKlxyXG4gKiBJZiB5b3Ugd2lzaCB0byBjbG9uZSBzb3VyY2Ugb2JqZWN0ICh3aXRob3V0IG1vZGlmeSBpdCksIGp1c3QgdXNlIGVtcHR5IG5ld1xyXG4gKiBvYmplY3QgYXMgZmlyc3QgYXJndW1lbnQsIGxpa2UgdGhpczpcclxuICogICBkZWVwRXh0ZW5kKHt9LCB5b3VyT2JqXzEsIFt5b3VyT2JqX05dKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWVwRXh0ZW5kID0gZnVuY3Rpb24oLi4ub2JqZWN0czogQXJyYXk8YW55Pik6IGFueSB7XHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcclxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXJnZXQgPSBhcmd1bWVudHNbMF07XHJcblxyXG4gIC8vIGNvbnZlcnQgYXJndW1lbnRzIHRvIGFycmF5IGFuZCBjdXQgb2ZmIHRhcmdldCBvYmplY3RcclxuICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuXHJcbiAgbGV0IHZhbCwgc3JjO1xyXG5cclxuICBhcmdzLmZvckVhY2goKG9iajogYW55KSA9PiB7XHJcbiAgICAvLyBza2lwIGFyZ3VtZW50IGlmIGl0IGlzIGFycmF5IG9yIGlzbid0IG9iamVjdFxyXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgc3JjID0gdGFyZ2V0W2tleV07IC8vIHNvdXJjZSB2YWx1ZVxyXG4gICAgICB2YWwgPSBvYmpba2V5XTsgLy8gbmV3IHZhbHVlXHJcblxyXG4gICAgICAvLyByZWN1cnNpb24gcHJldmVudGlvblxyXG4gICAgICBpZiAodmFsID09PSB0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGlmIG5ldyB2YWx1ZSBpc24ndCBvYmplY3QgdGhlbiBqdXN0IG92ZXJ3cml0ZSBieSBuZXcgdmFsdWVcclxuICAgICAgICAgKiBpbnN0ZWFkIG9mIGV4dGVuZGluZy5cclxuICAgICAgICAgKi9cclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0JyB8fCB2YWwgPT09IG51bGwpIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGp1c3QgY2xvbmUgYXJyYXlzIChhbmQgcmVjdXJzaXZlIGNsb25lIG9iamVjdHMgaW5zaWRlKVxyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gY2xvbmVEZWVwKHZhbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBvdmVyd3JpdGUgYnkgbmV3IHZhbHVlIGlmIHNvdXJjZSBpc24ndCBvYmplY3Qgb3IgYXJyYXlcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3JjICE9PSAnb2JqZWN0JyB8fCBzcmMgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShzcmMpKSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHt9LCB2YWwpO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gc291cmNlIHZhbHVlIGFuZCBuZXcgdmFsdWUgaXMgb2JqZWN0cyBib3RoLCBleHRlbmRpbmcuLi5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBFeHRlbmQoc3JjLCB2YWwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmZXJyZWQge1xyXG5cclxuICBwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG4gIHJlc29sdmU6IGFueTtcclxuICByZWplY3Q6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBnZXREZWVwRnJvbU9iamVjdCh7cmVzdWx0OiB7ZGF0YTogMX19LCAncmVzdWx0LmRhdGEnLCAyKTsgLy8gcmV0dXJucyAxXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWVwRnJvbU9iamVjdChvYmplY3QgPSB7fSwgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcclxuICBjb25zdCBrZXlzID0gbmFtZS5zcGxpdCgnLicpO1xyXG4gIC8vIGNsb25lIHRoZSBvYmplY3RcclxuICBsZXQgbGV2ZWwgPSBkZWVwRXh0ZW5kKHt9LCBvYmplY3QpO1xyXG4gIGtleXMuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgaWYgKGxldmVsICYmIHR5cGVvZiBsZXZlbFtrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbGV2ZWwgPSBsZXZlbFtrXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBsZXZlbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VGb3JSb3dJbmRleChpbmRleDogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIC8vIHdlIG5lZWQgdG8gYWRkIDEgdG8gY29udmVydCAwLWJhc2VkIGluZGV4IHRvIDEtYmFzZWQgcGFnZSBudW1iZXIuXHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyBwZXJQYWdlKSArIDE7XHJcbn1cclxuIl19