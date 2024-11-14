// 상속관계 Repository > CrudRepository > PagingAndSortingRepository > JpaRepository

public interface JpaRepository<T, ID extends Serializable> extends PagingAndSortingRepository<T, ID> {

  // findAll() : 모든 엔티티를 조회 (파라미터: 정렬 or 페이징 조건)
	List<T> findAll();
	List<T> findAll(Sort sort);
	List<T> findAll(Iterable<ID> ids);

  // 새로운 엔티티 저장, 이미있는 엔티티 수정
	<S extends T> List<S> save(Iterable<S> entities);

	void flush();

	<S extends T> S saveAndFlush(S entity);

	void deleteInBatch(Iterable<T> entities);

	void deleteAllInBatch();

  // 엔티티 프록시 조회 (내부에서 EntityManager.getReference() 호출)
	T getOne(ID id);
}

public interface PagingAndSortingRepository<T, ID extends Serializable> extends CrudRepository<T, ID> {
	Iterable<T> findAll(Sort sort);
	Page<T> findAll(Pageable pageable);
}

public interface CrudRepository<T, ID extends Serializable> extends Repository<T, ID> {

	<S extends T> S save(S entity);
	<S extends T> Iterable<S> save(Iterable<S> entities);

  // 엔티티 하나 조회 (EntityManager.find() 호출)
	T findOne(ID id);

	boolean exists(ID id);

	Iterable<T> findAll();
	Iterable<T> findAll(Iterable<ID> ids);

	long count();

  // 엔티티 삭제 (EntityManager.remove())
	void delete(ID id);
	void delete(T entity);
	void delete(Iterable<? extends T> entities);

	void deleteAll();
}

// 마커 인터페이스(메소드 선언없음)
public interface Repository<T, ID> {
	
}
