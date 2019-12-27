"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullrequestAllOfMergeCommit = _interopRequireDefault(require("./PullrequestAllOfMergeCommit"));

var _PullrequestEndpointBranch = _interopRequireDefault(require("./PullrequestEndpointBranch"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullrequestEndpoint model module.
 * @module model/PullrequestEndpoint
 * @version 1.1.0
 */
var PullrequestEndpoint =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullrequestEndpoint</code>.
   * @alias module:model/PullrequestEndpoint
   */
  function PullrequestEndpoint() {
    _classCallCheck(this, PullrequestEndpoint);

    PullrequestEndpoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestEndpoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullrequestEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestEndpoint} obj Optional instance to populate.
     * @return {module:model/PullrequestEndpoint} The populated <code>PullrequestEndpoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestEndpoint();

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _PullrequestEndpointBranch["default"].constructFromObject(data['branch']);
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _PullrequestAllOfMergeCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }
      }

      return obj;
    }
  }]);

  return PullrequestEndpoint;
}();
/**
 * @member {module:model/PullrequestEndpointBranch} branch
 */


PullrequestEndpoint.prototype['branch'] = undefined;
/**
 * @member {module:model/PullrequestAllOfMergeCommit} commit
 */

PullrequestEndpoint.prototype['commit'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

PullrequestEndpoint.prototype['repository'] = undefined;
var _default = PullrequestEndpoint;
exports["default"] = _default;