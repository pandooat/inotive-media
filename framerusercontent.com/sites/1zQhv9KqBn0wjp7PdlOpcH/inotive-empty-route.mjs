/* Inotive Media: these pages are served as static files.
   This stub keeps Framer's router from rendering its own version over ours.
   It deliberately imports nothing: a bare "react" specifier cannot be resolved
   by the browser and would abort the module load on Safari. */
export default function Empty() { return null; }