/**
 * Tmdb-img's service unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {TestBed, inject} from '@angular/core/testing';
import {TmdbImgService} from './tmdb-img.service';

describe('TmdbImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [TmdbImgService]});
  });

  it('should be created', inject([TmdbImgService], (service : TmdbImgService) => {
    expect(service).toBeTruthy();
  }));
});
