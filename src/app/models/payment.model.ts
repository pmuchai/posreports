/**
 * Created by HP on 03/07/2017.
 */
export class Payment{
  constructor(
    private PosTrnMstID:string,
    private PayAmount:number,
    private TenderAmt:number,
    private ChangeAmt:number,
    private PaymentDtl:string,
    private RunDate:string)
  {

  }
}

/*
 "PosPayDetailsID": "C73FA868-3783-4348-9C0D-4A95D9F0C9C2",
 "PosTrnMstID": "567BF46A-DA8C-4E13-9321-56E5FDE16415",
 "PayAmount": 2900,
 "TenderAmt": 2900,
 "ChangeAmt": 0,
 "CurrencyID": "F8DA7DC0-AC95-4D62-BB83-F1637864531B",
 "ConverRate": 1,
 "AuthDet": null,
 "TranNo": null,
 "PaymentDtl": "CASH",
 "CustID": "944BB7A9-591C-4537-93C7-43532F28DC6F",
 "PaymentType": "8FB74EA3-2555-497D-A481-F87EA22DEC50",
 "RunDate": "2015-08-20T00:00:00.000Z",
 "SysDate": "2016-08-01T18:51:29.953Z",
 "UserID": "D4B06338-3392-4236-A4B5-2E9C15248AD2",
 "OptimisticLockField": null,
 "GCRecord": null


 */
