const levels = {
    '1': 'Especialidad',
    '2': 'Subespecialidad',
    '3': 'Alta especialidad',
    '4': 'No aplica'
}

export const getLevel = (num) => {
    return levels[num] || 'Not found'
}