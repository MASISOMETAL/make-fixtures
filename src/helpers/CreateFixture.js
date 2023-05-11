export const CreateFixture = (equipo) => {

    let totalEquipos = equipo.length;

    // Asegurarse de que el número de equipos es par
    if (totalEquipos % 2 !== 0) {
        equipo.push('Descanso');
        totalEquipos++
    }

    const jornadas = totalEquipos - 1;
    const partidosPorJornada = totalEquipos / 2;
    const fixture = [];

    for (let i = 0; i < jornadas; i++) {
        const jornada = [];

        for (let j = 0; j < partidosPorJornada; j++) {
            let local = (i + j) % (totalEquipos - 1);
            let visitante = (totalEquipos - 1 - j + i) % (totalEquipos - 1);

            if (j === 0) {
                visitante = totalEquipos - 1;
            }

            // Ignorar el equipo "Descanso"
            if (equipo[local] !== 'Descanso' && equipo[visitante] !== 'Descanso') {
                jornada.push([equipo[local], equipo[visitante]]);
            }
        }

        fixture.push(jornada);
    }

    return { fixture };

}
