const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const {existeMascotaById} = require('../helpers/db-validators');
const { mascotasPost, mascotasGet, getMascotaByid, mascotasPut, mascotasDelete } = require('../controllers/mascotas.controller');

const router = Router();

router.get("/", mascotasGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato válido en MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], getMascotaByid);

router.put(
    "/:id",
    [
        check("id", "El id no es un fprmato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotasPut);
router.delete(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotasDelete);
router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("raza", "la raza debe ser mayor a 4 caracteres").not().isEmpty(),
        check("edad", "La edad es obligatoria").not().isEmpty(),
        check("color", "El color es obligatorio").not().isEmpty(),
        check("tamaño", "El tamaño es obligatorio").not().isEmpty(),
        validarCampos,
    ], mascotasPost);

module.exports = router;


