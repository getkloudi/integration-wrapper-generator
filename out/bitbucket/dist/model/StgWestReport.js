"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StgWestReport model module.
 * @module model/StgWestReport
 * @version 1.1.0
 */
var StgWestReport =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StgWestReport</code>.
   * @alias module:model/StgWestReport
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @param type {String} 
   */
  function StgWestReport(type) {
    _classCallCheck(this, StgWestReport);

    _ModelObject["default"].initialize(this, type);

    StgWestReport.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StgWestReport, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>StgWestReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StgWestReport} obj Optional instance to populate.
     * @return {module:model/StgWestReport} The populated <code>StgWestReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StgWestReport();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return StgWestReport;
}(); // Implement ModelObject interface:

/**
 * @member {String} type
 */


_ModelObject["default"].prototype['type'] = undefined;
var _default = StgWestReport;
exports["default"] = _default;