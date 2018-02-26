package org.springframework.samples.utec.util;

import java.util.Collection;

import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.samples.utec.model.BaseEntity;


public abstract class EntityUtils {

    public static <T extends BaseEntity> T getById(Collection<T> entities, Class<T> entityClass, int entityId)
        throws ObjectRetrievalFailureException {
        for (T entity : entities) {
            if (entity.getId() == entityId && entityClass.isInstance(entity)) {
                return entity;
            }
        }
        throw new ObjectRetrievalFailureException(entityClass, entityId);
    }

}
