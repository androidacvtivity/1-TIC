INSERT INTO CIS2.TABLE_OUT 
(
  PERIOADA,
  FORM,
  FORM_VERS,
  ID_MDTABLE,
  COD_CUATM,
  NR_SECTIE,
  NUME_SECTIE,
  NR_SECTIE1,
  NUME_SECTIE1,
  NR_SECTIE2,
  NUME_SECTIE2,
  NR_ROW,
  ORDINE,
  DECIMAL_POS,
  NUME_ROW,   
  COL1, COL2, COL3,  COL4, COL5, COL6, COL7, COL8
)
SELECT
  :pPERIOADA AS PERIOADA,
  :pFORM AS FORM,
  :pFORM_VERS AS FORM_VERS,
  :pID_MDTABLE AS ID_MDTABLE,
  :pCOD_CUATM AS COD_CUATM,
         
  '0' AS NR_SECTIE,
  '0' AS NUME_SECTIE,
  '0' AS NR_SECTIE1,
  '0' AS NUME_SECTIE1,
  '0' AS NR_SECTIE2,
  '0' AS NUME_SECTIE2,
   D.NR_ROW AS NR_ROW,
   ROWNUM AS ORDINE,
  '00000000' AS DECIMAL_POS,
   NUME_ROW AS NUME_ROW,
   D.COL1 AS COL1,
   D.COL2 AS COL2,
   D.COL3 AS COL3,
   D.COL4 AS COL4,
   D.COL5 AS COL5,
   D.COL6 AS COL6,
   NULL  AS  COL7,
   NULL  AS  COL8
   

FROM
(

  SELECT
   CD.CODUL AS NR_ROW,  
   CD.FULL_CODE AS ORDINE,
  '000000' AS DECIMAL_POS,
   CD.DENUMIRE AS NUME_ROW,
  CIS2.NVAL(COUNT(DISTINCT (CASE WHEN D.RIND  IN ('110','111','112','113') AND D.CAPITOL IN (1181) AND CIS2.NVAL(D.COL1)>0 THEN D.CUIIO END))) AS COL1, 
  CIS2.NVAL(SUM (CASE WHEN D.RIND  IN ('110') AND D.CAPITOL IN (1181) THEN  CIS2.NVAL(D.COL1) ELSE 0 END)) AS COL2, 
  CIS2.NVAL(SUM (CASE WHEN D.RIND  IN ('111') AND D.CAPITOL IN (1181) THEN  CIS2.NVAL(D.COL1) ELSE 0 END)) AS COL3, 
  CIS2.NVAL(SUM (CASE WHEN D.RIND  IN ('112') AND D.CAPITOL IN (1181) THEN  CIS2.NVAL(D.COL1) ELSE 0 END)) AS COL4, 
  CIS2.NVAL(SUM (CASE WHEN D.RIND  IN ('113') AND D.CAPITOL IN (1181) THEN  CIS2.NVAL(D.COL1) ELSE 0 END)) AS COL5, 
  CIS2.NVAL(SUM (CASE WHEN D.RIND  IN ('120') AND D.CAPITOL IN (1181) THEN  CIS2.NVAL(D.COL1) ELSE 0 END)) AS COL6 
   
  FROM
      CIS2.VW_DATA_ALL D        
      INNER JOIN CIS2.VW_CL_CAEM2 C  ON(D.CAEM2=C.CODUL)
      INNER JOIN CIS2.VW_CL_CAEM2 CD ON(C.FULL_CODE LIKE '%'||CD.CODUL||';%')         


WHERE  D.PERIOADA IN (:pPERIOADA) AND
       D.FORM = :pFORM AND
       D.FORM_VERS = :pFORM_VERS  AND  
      (:pID_MDTABLE=:pID_MDTABLE) AND
       D.FORM = 71 AND
       D.CAPITOL IN (1181) AND
       D.CUATM_FULL LIKE '%'||:pCOD_CUATM||';%'
       
       --AND D.CUIIO=297922
      
GROUP BY  CD.CODUL ,CD.FULL_CODE ,CD.DENUMIRE
ORDER BY  CD.FULL_CODE
 ) D