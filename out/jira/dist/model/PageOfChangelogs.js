"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Changelog = _interopRequireDefault(require("./Changelog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PageOfChangelogs model module.
 * @module model/PageOfChangelogs
 * @version 1.4.0
 */
var PageOfChangelogs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageOfChangelogs</code>.
   * A page of changelogs.
   * @alias module:model/PageOfChangelogs
   */
  function PageOfChangelogs() {
    _classCallCheck(this, PageOfChangelogs);

    PageOfChangelogs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PageOfChangelogs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PageOfChangelogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageOfChangelogs} obj Optional instance to populate.
     * @return {module:model/PageOfChangelogs} The populated <code>PageOfChangelogs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageOfChangelogs();

        if (data.hasOwnProperty('histories')) {
          obj['histories'] = _ApiClient["default"].convertToType(data['histories'], [_Changelog["default"]]);
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PageOfChangelogs;
}();
/**
 * The list of changelogs.
 * @member {Array.<module:model/Changelog>} histories
 */


PageOfChangelogs.prototype['histories'] = undefined;
/**
 * The maximum number of results that could be on the page.
 * @member {Number} maxResults
 */

PageOfChangelogs.prototype['maxResults'] = undefined;
/**
 * The index of the first item returned on the page.
 * @member {Number} startAt
 */

PageOfChangelogs.prototype['startAt'] = undefined;
/**
 * The number of results on the page.
 * @member {Number} total
 */

PageOfChangelogs.prototype['total'] = undefined;
var _default = PageOfChangelogs;
exports["default"] = _default;