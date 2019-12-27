"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullrequestAllOfRenderedTitle = _interopRequireDefault(require("./PullrequestAllOfRenderedTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullrequestAllOfRendered model module.
 * @module model/PullrequestAllOfRendered
 * @version 1.1.0
 */
var PullrequestAllOfRendered =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullrequestAllOfRendered</code>.
   * @alias module:model/PullrequestAllOfRendered
   */
  function PullrequestAllOfRendered() {
    _classCallCheck(this, PullrequestAllOfRendered);

    PullrequestAllOfRendered.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestAllOfRendered, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullrequestAllOfRendered</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestAllOfRendered} obj Optional instance to populate.
     * @return {module:model/PullrequestAllOfRendered} The populated <code>PullrequestAllOfRendered</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestAllOfRendered();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _PullrequestAllOfRenderedTitle["default"].constructFromObject(data['title']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _PullrequestAllOfRenderedTitle["default"].constructFromObject(data['description']);
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _PullrequestAllOfRenderedTitle["default"].constructFromObject(data['reason']);
        }
      }

      return obj;
    }
  }]);

  return PullrequestAllOfRendered;
}();
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} title
 */


PullrequestAllOfRendered.prototype['title'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} description
 */

PullrequestAllOfRendered.prototype['description'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} reason
 */

PullrequestAllOfRendered.prototype['reason'] = undefined;
var _default = PullrequestAllOfRendered;
exports["default"] = _default;