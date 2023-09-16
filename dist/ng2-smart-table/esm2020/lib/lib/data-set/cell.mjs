export function prepareValue(value) { return value; }
export class Cell {
    constructor(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    getColumn() {
        return this.column;
    }
    getRow() {
        return this.row;
    }
    getValue() {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    }
    setValue(value) {
        this.newValue = value;
    }
    getId() {
        return this.getColumn().id;
    }
    getTitle() {
        return this.getColumn().title;
    }
    isEditable() {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }
}
Cell.PREPARE = prepareValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2xpYi9kYXRhLXNldC9jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxZQUFZLENBQUUsS0FBVSxJQUFJLE9BQU8sS0FBSyxDQUFBLENBQUMsQ0FBQztBQUUxRCxNQUFNLE9BQU8sSUFBSTtJQUtmLFlBQXNCLEtBQVUsRUFBWSxHQUFRLEVBQVksTUFBVyxFQUFZLE9BQWdCO1FBQWpGLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUFZLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFIdkcsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUlqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxRQUFRLENBQUM7UUFDeEUsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0UsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUNuQzthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7QUF2Q2dCLFlBQU8sR0FBRyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XHJcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0JztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9yb3cnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVWYWx1ZSAodmFsdWU6IGFueSkgeyByZXR1cm4gdmFsdWUgfVxyXG5cclxuZXhwb3J0IGNsYXNzIENlbGwge1xyXG5cclxuICBuZXdWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHJvdGVjdGVkIHN0YXRpYyBQUkVQQVJFID0gcHJlcGFyZVZhbHVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdmFsdWU6IGFueSwgcHJvdGVjdGVkIHJvdzogUm93LCBwcm90ZWN0ZWQgY29sdW1uOiBhbnksIHByb3RlY3RlZCBkYXRhU2V0OiBEYXRhU2V0KSB7XHJcbiAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW4oKTogQ29sdW1uIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbjtcclxuICB9XHJcblxyXG4gIGdldFJvdygpOiBSb3cge1xyXG4gICAgcmV0dXJuIHRoaXMucm93O1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogYW55IHtcclxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jb2x1bW4uZ2V0VmFsdWVQcmVwYXJlRnVuY3Rpb24oKSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xyXG4gICAgY29uc3QgcHJlcGFyZSA9IHZhbGlkID8gdGhpcy5jb2x1bW4uZ2V0VmFsdWVQcmVwYXJlRnVuY3Rpb24oKSA6IENlbGwuUFJFUEFSRTtcclxuICAgIHJldHVybiBwcmVwYXJlLmNhbGwobnVsbCwgdGhpcy52YWx1ZSwgdGhpcy5yb3cuZ2V0RGF0YSgpLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLmlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgaXNFZGl0YWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdldFJvdygpLmluZGV4ID09PSAtMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS5pc0FkZGFibGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkuaXNFZGl0YWJsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==