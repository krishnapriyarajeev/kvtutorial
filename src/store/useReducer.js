const actionTypes = {
    ADD_EMPLOYEE: 'ADD_EMPLOYEE',
    DELETE_EMPLOYEE: 'DELETE_EMPLOYEE',
    EDIT_EMPLOYEE: 'EDIT_EMPLOYEE'
};


const reducer = (state, action) =>{

    const employees = [...state.employees];

    switch(action.type){
        case actionTypes.ADD_EMPLOYEE:
         return{
            ...state,
            employees: [...state.employees, action.payload]
         };

         case actionTypes.DELETE_EMPLOYEE:
            return {
                ...state,
                employees: employees.filter(employee => employee.employeeid!==action.payload)
            }
        
        // case actionTypes.EDIT_EMPLOYEE:
        //     const employees = [...state.employees];
        //     return {
        //         ...state,
        //         employees: employees.filter(employee => employee.employeeid==action.payload)
        //     }
        default:
            return state;
    }
};

export {reducer as default, actionTypes};