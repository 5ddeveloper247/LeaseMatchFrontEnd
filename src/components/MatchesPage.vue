<template>
  <section class="matches-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center mb-4">Matches Created in System</h1>
          <div v-if="loading" class="text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-else-if="error" class="alert alert-danger" role="alert">
            {{ error }}
          </div>
          <div v-else-if="matches.length === 0" class="alert alert-info" role="alert">
            No matches found in the system.
          </div>
          <div v-else>
            <div class="row mb-3">
              <div class="col-md-6">
                <p class="mb-0"><strong>Total Matches:</strong> {{ matches.length }}</p>
              </div>
              <div class="col-md-6 text-end">
                <button @click="fetchMatches" class="btn btn-primary">Refresh</button>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tenant Name</th>
                    <th>Property Address</th>
                    <th>Match Score</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="match in matches" :key="match.id">
                    <td>{{ match.id }}</td>
                    <td>{{ match.tenant_name || match.tenant?.name || 'N/A' }}</td>
                    <td>{{ match.property_address || match.property?.address || 'N/A' }}</td>
                    <td>
                      <span class="badge bg-info">{{ match.match_score || match.score || 'N/A' }}%</span>
                    </td>
                    <td>
                      <span :class="getStatusClass(match.status)">
                        {{ match.status || 'Pending' }}
                      </span>
                    </td>
                    <td>{{ formatDate(match.created_at) }}</td>
                    <td>
                      <button @click="viewMatchDetails(match)" class="btn btn-sm btn-outline-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { axiosInstance } from '@/plugins/axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const matches = ref([]);
const loading = ref(false);
const error = ref('');

const fetchMatches = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    // Try common API endpoints for matches
    let response;
    try {
      response = await axiosInstance.get('/matches');
    } catch (e) {
      try {
        response = await axiosInstance.get('/matches/list');
      } catch (e2) {
        try {
          response = await axiosInstance.get('/matches/getAll');
        } catch (e3) {
          throw new Error('Could not find matches endpoint. Please check your backend API.');
        }
      }
    }
    
    if (response.data.success) {
      matches.value = response.data.data?.matches || response.data.data || response.data.matches || [];
    } else {
      error.value = response.data.error || 'Failed to fetch matches';
      toastr.error(error.value);
    }
  } catch (err) {
    error.value = err.response?.data?.message || err.message || 'An error occurred while fetching matches';
    toastr.error(error.value);
    console.error('Error fetching matches:', err);
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const getStatusClass = (status) => {
  const statusLower = (status || '').toLowerCase();
  if (statusLower === 'active' || statusLower === 'approved') {
    return 'badge bg-success';
  } else if (statusLower === 'pending') {
    return 'badge bg-warning';
  } else if (statusLower === 'rejected' || statusLower === 'cancelled') {
    return 'badge bg-danger';
  }
  return 'badge bg-secondary';
};

const viewMatchDetails = (match) => {
  // You can implement a modal or navigate to a details page
  console.log('Match details:', match);
  toastr.info('Match details: ' + JSON.stringify(match, null, 2));
};

onMounted(() => {
  fetchMatches();
});
</script>

<style scoped>
.matches-section {
  min-height: 80vh;
  padding-top: 2rem;
}

.table {
  background-color: white;
}

.badge {
  padding: 0.5em 0.75em;
}
</style>
