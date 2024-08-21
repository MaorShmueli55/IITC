----Q1
--select *
--from Orders

----Q2
--select *
--from Employees

----Q3
--select FirstName,
--HireDate,
--Region
--from Employees

----Q4
--select CustomerID,
--OrderID,
--OrderDate
--from Orders

----Q5
--select ProductID as Proid,
--ProductName as ProNum,
--UnitPrice as UntPr
--from Products

----Q6
--select Address as Addr,
--city as Ct,
--region as reg
--from Employees


----Q7
--select CustomerID,
--Address + ' ' + City as [full address]
--from Customers

----Q8
--select FirstName + ' ' + LastName as FullName,
--BirthDate + 8 as [BirthDate],
--ReportsTo as #Manager
--from Employees

----Q9
--select distinct City
--from Employees

----Q10
--select distinct Country
--from Employees

----Q11
--select distinct Title
--from Employees 

----Q12
--select City,
--Country
--from Customers

--select distinct City + ' ' + Country
--from Customers

----Q13
--select FirstName,
--BirthDate,
--BirthDate + 5
--from Employees

----Q14
--select ProductName,
--UnitPrice,
--UnitPrice + 10
--from Products

----Q15
--select ProductID,
--ProductName,
--UnitPrice,
--UnitPrice * 116.5 / 100 as NewUnitPrice,
--UnitsInStock,
--UnitsOnOrder,
--UnitsInStock - UnitsOnOrder
--from Products

----Q16
--select ProductID,
--ProductName,
--(UnitsInStock - UnitsOnOrder) * UnitPrice
--from Products
--where (UnitsInStock - UnitsOnOrder) > 0



-- order by CategoryID desc - סדר יורד
-- order by CategoryID asc - סדר עולה


-- select SUM(unitprice) as 'SUM'


-- MIN(unitprice) as 'MIN'
-- MAX(unitprice) as 'MAX'
-- AVG(unitprice) as 'AVG'
-- Count(unitprice) as 'COUNT'
-- from products


--select *
--from Products join Categories
--on Products.CategoryID = Categories.CategoryID

--select ProductID, ProductName, UnitPrice, CategoryName, Description
--from Products join Categories
--on Products.CategoryID = Categories.CategoryID
--where Products.CategoryID = 8
--order by UnitPrice 
