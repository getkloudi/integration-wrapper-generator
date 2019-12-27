"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubjectTypesRepository = _interopRequireDefault(require("./SubjectTypesRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SubjectTypes model module.
 * @module model/SubjectTypes
 * @version 1.1.0
 */
var SubjectTypes =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SubjectTypes</code>.
   * The mapping of resource/subject types pointing to their individual event types.
   * @alias module:model/SubjectTypes
   */
  function SubjectTypes() {
    _classCallCheck(this, SubjectTypes);

    SubjectTypes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubjectTypes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubjectTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectTypes} obj Optional instance to populate.
     * @return {module:model/SubjectTypes} The populated <code>SubjectTypes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubjectTypes();

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _SubjectTypesRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _SubjectTypesRepository["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('team')) {
          obj['team'] = _SubjectTypesRepository["default"].constructFromObject(data['team']);
        }
      }

      return obj;
    }
  }]);

  return SubjectTypes;
}();
/**
 * @member {module:model/SubjectTypesRepository} repository
 */


SubjectTypes.prototype['repository'] = undefined;
/**
 * @member {module:model/SubjectTypesRepository} user
 */

SubjectTypes.prototype['user'] = undefined;
/**
 * @member {module:model/SubjectTypesRepository} team
 */

SubjectTypes.prototype['team'] = undefined;
var _default = SubjectTypes;
exports["default"] = _default;