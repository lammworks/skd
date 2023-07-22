"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _BgFirma=_interopRequireDefault(require("./BgFirma")),_crypto=_interopRequireDefault(require("crypto")),_constants=require("../constants/constants");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}class YappyPayment{constructor(a,b){_defineProperty(this,"merchantId",void 0),_defineProperty(this,"secretKey",void 0),this.merchantId=a,this.secretKey=b}/**
   *
   * @param paymentInfo Object with payment info.
   * @param donation If your transaction to donation, by default is false.
   * @param sandbox Sets the transaction to sandbox mode, by default is false.
   */async getPaymentUrl(a,b=!1,c=!1){a.donation=a.donation?a.donation:b,a.sandbox=a.sandbox?a.sandbox:c;const d=await _BgFirma.default.checkCredentials(this.merchantId,this.secretKey,a.domain);if(d&&!0===d.success){const b=new _BgFirma.default(a,this.merchantId,this.secretKey,d.accessToken,d.unixTimestamp),c=b.createHash();return c}return d}decodeSecret(a){const b=Buffer.from(a,"base64").toString(),c=b.split(".");return c}validateHash(a){let b;try{const c=a.orderId,d=a.status,e=a.hash,f=a.domain,g=this.decodeSecret(this.secretKey);if("undefined"!=typeof c&&"undefined"!=typeof d&&"undefined"!=typeof e&&"undefined"!=typeof f){const a=_crypto.default.createHmac(_constants.HASH,g[0]).update(Buffer.from(c+d+f,"utf-8")).digest("hex").toString();b=0===e.localeCompare(a)}else b=!1}catch(a){b=!1}return b}}var _default=YappyPayment;exports.default=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvWWFwcHlQYXltZW50LnRzIl0sIm5hbWVzIjpbIllhcHB5UGF5bWVudCIsImNvbnN0cnVjdG9yIiwibWVyY2hhbnRJZCIsInNlY3JldEtleSIsImdldFBheW1lbnRVcmwiLCJwYXltZW50SW5mbyIsImRvbmF0aW9uIiwic2FuZGJveCIsInJlc3BvbnNlIiwiQmdGaXJtYSIsImNoZWNrQ3JlZGVudGlhbHMiLCJkb21haW4iLCJzdWNjZXNzIiwiYmciLCJhY2Nlc3NUb2tlbiIsInVuaXhUaW1lc3RhbXAiLCJlY29tRGF0YSIsImNyZWF0ZUhhc2giLCJkZWNvZGVTZWNyZXQiLCJ2YWx1ZXMiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJzZWNyZXQiLCJzcGxpdCIsInZhbGlkYXRlSGFzaCIsInBhcmFtcyIsIm9yZGVySWQiLCJzdGF0dXMiLCJoYXNoIiwic2lnbmF0dXJlIiwiY3J5cHRvIiwiY3JlYXRlSG1hYyIsIkhBU0giLCJ1cGRhdGUiLCJkaWdlc3QiLCJsb2NhbGVDb21wYXJlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJrY0FNQSxLQUFNQSxDQUFBQSxZQUFhLENBSWpCQyxXQUFXLENBQUNDLENBQUQsQ0FBcUJDLENBQXJCLENBQXdDLG9GQUNqRCxLQUFLRCxVQUFMLENBQWtCQSxDQUQrQixDQUVqRCxLQUFLQyxTQUFMLENBQWlCQSxDQUNsQixDQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUM0QixLQUFiQyxDQUFBQSxhQUFhLENBQ3hCQyxDQUR3QixDQUV4QkMsQ0FBUSxHQUZnQixDQUd4QkMsQ0FBTyxHQUhpQixDQUlMLENBQ25CRixDQUFXLENBQUNDLFFBQVosQ0FBdUJELENBQVcsQ0FBQ0MsUUFBWixDQUNuQkQsQ0FBVyxDQUFDQyxRQURPLENBRW5CQSxDQUhlLENBSW5CRCxDQUFXLENBQUNFLE9BQVosQ0FBc0JGLENBQVcsQ0FBQ0UsT0FBWixDQUFzQkYsQ0FBVyxDQUFDRSxPQUFsQyxDQUE0Q0EsQ0FKL0MsQ0FLbkIsS0FBTUMsQ0FBQUEsQ0FBUSxDQUFHLEtBQU1DLGtCQUFRQyxnQkFBUixDQUNyQixLQUFLUixVQURnQixDQUVyQixLQUFLQyxTQUZnQixDQUdyQkUsQ0FBVyxDQUFDTSxNQUhTLENBQXZCLENBS0EsR0FBSUgsQ0FBUSxFQUFJLEtBQUFBLENBQVEsQ0FBQ0ksT0FBekIsQ0FBMkMsTUFDbkNDLENBQUFBLENBQUUsQ0FBRyxHQUFJSixpQkFBSixDQUNUSixDQURTLENBRVQsS0FBS0gsVUFGSSxDQUdULEtBQUtDLFNBSEksQ0FJVEssQ0FBUSxDQUFDTSxXQUpBLENBS1ROLENBQVEsQ0FBQ08sYUFMQSxDQUQ4QixDQVFuQ0MsQ0FBUSxDQUFHSCxDQUFFLENBQUNJLFVBQUgsRUFSd0IsQ0FTekMsTUFBT0QsQ0FBQUEsQ0FDUixDQUNELE1BQU9SLENBQUFBLENBQ1IsQ0FFT1UsWUFBWSxDQUFDZixDQUFELENBQW1DLE1BQy9DZ0IsQ0FBQUEsQ0FBTSxDQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWxCLENBQVosQ0FBdUIsUUFBdkIsRUFBaUNtQixRQUFqQyxFQURzQyxDQUUvQ0MsQ0FBTSxDQUFHSixDQUFNLENBQUNLLEtBQVAsQ0FBYSxHQUFiLENBRnNDLENBR3JELE1BQU9ELENBQUFBLENBQ1IsQ0FFTUUsWUFBWSxDQUFDQyxDQUFELENBQW1DLENBQ3BELEdBQUlkLENBQUFBLENBQUosQ0FFQSxHQUFJLE1BQ0llLENBQUFBLENBQU8sQ0FBR0QsQ0FBTSxDQUFDQyxPQURyQixDQUVJQyxDQUFNLENBQUdGLENBQU0sQ0FBQ0UsTUFGcEIsQ0FHSUMsQ0FBSSxDQUFHSCxDQUFNLENBQUNHLElBSGxCLENBSUlsQixDQUFNLENBQUdlLENBQU0sQ0FBQ2YsTUFKcEIsQ0FLSVksQ0FBTSxDQUFHLEtBQUtMLFlBQUwsQ0FBa0IsS0FBS2YsU0FBdkIsQ0FMYixDQU9GLEdBQ3FCLFdBQW5CLFFBQU93QixDQUFBQSxDQUFQLEVBQ2tCLFdBQWxCLFFBQU9DLENBQUFBLENBRFAsRUFFZ0IsV0FBaEIsUUFBT0MsQ0FBQUEsQ0FGUCxFQUdrQixXQUFsQixRQUFPbEIsQ0FBQUEsQ0FKVCxDQUtFLENBQ0EsS0FBTW1CLENBQUFBLENBQVMsQ0FBR0MsZ0JBQ2ZDLFVBRGUsQ0FDSkMsZUFESSxDQUNFVixDQUFNLENBQUMsQ0FBRCxDQURSLEVBRWZXLE1BRmUsQ0FFUmQsTUFBTSxDQUFDQyxJQUFQLENBQVlNLENBQU8sQ0FBR0MsQ0FBVixDQUFtQmpCLENBQS9CLENBQXVDLE9BQXZDLENBRlEsRUFHZndCLE1BSGUsQ0FHUixLQUhRLEVBSWZiLFFBSmUsRUFBbEIsQ0FNQVYsQ0FBTyxDQUFxQyxDQUFsQyxHQUFBaUIsQ0FBSSxDQUFDTyxhQUFMLENBQW1CTixDQUFuQixDQUNYLENBYkQsSUFjRWxCLENBQUFBLENBQU8sR0FFVixDQUFDLE1BQU95QixDQUFQLENBQWMsQ0FDZHpCLENBQU8sR0FDUixDQUVELE1BQU9BLENBQUFBLENBQ1IsQ0FoRmdCLEMsYUFtRkpaLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmdGaXJtYSBmcm9tIFwiLi9CZ0Zpcm1hXCI7XG5pbXBvcnQgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCB7IEVjb21EYXRhLCBQYXltZW50SW5mbywgVmFsaWRhdG9yUGFyYW1zIH0gZnJvbSBcIi4uL3R5cGVzL2NvbW1vbi9tYWluXCI7XG5pbXBvcnQgeyBIQVNIIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7IElOVkFMSURfQ1JFREVOVElBTFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Vycm9yc1wiO1xuXG5jbGFzcyBZYXBweVBheW1lbnQge1xuICBwcml2YXRlIG1lcmNoYW50SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWNyZXRLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtZXJjaGFudElkOiBzdHJpbmcsIHNlY3JldEtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXJjaGFudElkID0gbWVyY2hhbnRJZDtcbiAgICB0aGlzLnNlY3JldEtleSA9IHNlY3JldEtleTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcGF5bWVudEluZm8gT2JqZWN0IHdpdGggcGF5bWVudCBpbmZvLlxuICAgKiBAcGFyYW0gZG9uYXRpb24gSWYgeW91ciB0cmFuc2FjdGlvbiB0byBkb25hdGlvbiwgYnkgZGVmYXVsdCBpcyBmYWxzZS5cbiAgICogQHBhcmFtIHNhbmRib3ggU2V0cyB0aGUgdHJhbnNhY3Rpb24gdG8gc2FuZGJveCBtb2RlLCBieSBkZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldFBheW1lbnRVcmwoXG4gICAgcGF5bWVudEluZm86IFBheW1lbnRJbmZvLFxuICAgIGRvbmF0aW9uID0gZmFsc2UsXG4gICAgc2FuZGJveCA9IGZhbHNlXG4gICk6IFByb21pc2U8RWNvbURhdGE+IHtcbiAgICBwYXltZW50SW5mby5kb25hdGlvbiA9IHBheW1lbnRJbmZvLmRvbmF0aW9uXG4gICAgICA/IHBheW1lbnRJbmZvLmRvbmF0aW9uXG4gICAgICA6IGRvbmF0aW9uO1xuICAgIHBheW1lbnRJbmZvLnNhbmRib3ggPSBwYXltZW50SW5mby5zYW5kYm94ID8gcGF5bWVudEluZm8uc2FuZGJveCA6IHNhbmRib3g7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBCZ0Zpcm1hLmNoZWNrQ3JlZGVudGlhbHMoXG4gICAgICB0aGlzLm1lcmNoYW50SWQsXG4gICAgICB0aGlzLnNlY3JldEtleSxcbiAgICAgIHBheW1lbnRJbmZvLmRvbWFpblxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGJnID0gbmV3IEJnRmlybWEoXG4gICAgICAgIHBheW1lbnRJbmZvLFxuICAgICAgICB0aGlzLm1lcmNoYW50SWQsXG4gICAgICAgIHRoaXMuc2VjcmV0S2V5LFxuICAgICAgICByZXNwb25zZS5hY2Nlc3NUb2tlbiEsXG4gICAgICAgIHJlc3BvbnNlLnVuaXhUaW1lc3RhbXAhXG4gICAgICApO1xuICAgICAgY29uc3QgZWNvbURhdGEgPSBiZy5jcmVhdGVIYXNoKCk7XG4gICAgICByZXR1cm4gZWNvbURhdGE7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlU2VjcmV0KHNlY3JldEtleTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgdmFsdWVzID0gQnVmZmVyLmZyb20oc2VjcmV0S2V5LCBcImJhc2U2NFwiKS50b1N0cmluZygpO1xuICAgIGNvbnN0IHNlY3JldCA9IHZhbHVlcy5zcGxpdChcIi5cIik7XG4gICAgcmV0dXJuIHNlY3JldDtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZUhhc2gocGFyYW1zOiBWYWxpZGF0b3JQYXJhbXMpOiBib29sZWFuIHtcbiAgICBsZXQgc3VjY2VzczogYm9vbGVhbjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcmRlcklkID0gcGFyYW1zLm9yZGVySWQ7XG4gICAgICBjb25zdCBzdGF0dXMgPSBwYXJhbXMuc3RhdHVzO1xuICAgICAgY29uc3QgaGFzaCA9IHBhcmFtcy5oYXNoO1xuICAgICAgY29uc3QgZG9tYWluID0gcGFyYW1zLmRvbWFpbjtcbiAgICAgIGNvbnN0IHNlY3JldCA9IHRoaXMuZGVjb2RlU2VjcmV0KHRoaXMuc2VjcmV0S2V5KTtcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Ygb3JkZXJJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0eXBlb2Ygc3RhdHVzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHR5cGVvZiBoYXNoICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHR5cGVvZiBkb21haW4gIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBjcnlwdG9cbiAgICAgICAgICAuY3JlYXRlSG1hYyhIQVNILCBzZWNyZXRbMF0pXG4gICAgICAgICAgLnVwZGF0ZShCdWZmZXIuZnJvbShvcmRlcklkICsgc3RhdHVzICsgZG9tYWluLCBcInV0Zi04XCIpKVxuICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIilcbiAgICAgICAgICAudG9TdHJpbmcoKTtcblxuICAgICAgICBzdWNjZXNzID0gaGFzaC5sb2NhbGVDb21wYXJlKHNpZ25hdHVyZSkgPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZYXBweVBheW1lbnQ7XG4iXX0=