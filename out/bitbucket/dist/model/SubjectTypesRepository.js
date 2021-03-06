"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubjectTypesRepositoryEvents = _interopRequireDefault(require("./SubjectTypesRepositoryEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SubjectTypesRepository model module.
 * @module model/SubjectTypesRepository
 * @version 1.2.0
 */
var SubjectTypesRepository = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubjectTypesRepository</code>.
   * @alias module:model/SubjectTypesRepository
   */
  function SubjectTypesRepository() {
    _classCallCheck(this, SubjectTypesRepository);

    SubjectTypesRepository.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubjectTypesRepository, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubjectTypesRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectTypesRepository} obj Optional instance to populate.
     * @return {module:model/SubjectTypesRepository} The populated <code>SubjectTypesRepository</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubjectTypesRepository();

        if (data.hasOwnProperty('events')) {
          obj['events'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['events']);
        }
      }

      return obj;
    }
  }]);

  return SubjectTypesRepository;
}();
/**
 * @member {module:model/SubjectTypesRepositoryEvents} events
 */


SubjectTypesRepository.prototype['events'] = undefined;
var _default = SubjectTypesRepository;
exports["default"] = _default;